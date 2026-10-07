/*
 * Estudo ativo: questionário de prática por módulo (ou matéria inteira),
 * com feedback imediato e explicação. Renderiza dentro de #app-root.
 */
(function () {
  let state = null;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function buildQuestionSet(subjectId, moduleId) {
    const pool = window.APP_DATA.quizzes[subjectId] || [];
    const filtered = moduleId ? pool.filter(q => q.module === moduleId) : pool;
    return shuffle(filtered).map(q => {
      const optOrder = shuffle(q.options.map((text, i) => ({ text, isCorrect: i === q.correctIndex })));
      return Object.assign({}, q, { shuffledOptions: optOrder });
    });
  }

  function renderSetup(root, subject) {
    const modOptions = subject.modules.map(m => `<option value="${m.id}">${m.order}. ${App.escapeHtml(m.title)}</option>`).join("");
    root.innerHTML = `
      <div class="pagehead"><h1>📝 Questionário — ${App.escapeHtml(subject.name)}</h1>
      <p class="lede">Pratique com perguntas de múltipla escolha, feedback na hora e explicação de cada resposta.</p></div>
      <div class="card quiz-setup" style="max-width:480px">
        <label class="select-field">Matéria
          <select id="sel-subject">${window.APP_DATA.registry.subjects.map(s => `<option value="${s.id}" ${s.id === subject.id ? "selected" : ""}>${s.name}</option>`).join("")}</select>
        </label>
        <label class="select-field">Módulo
          <select id="sel-module"><option value="">Todos os módulos</option>${modOptions}</select>
        </label>
        <button class="btn btn-primary btn-lg" id="btn-start">Começar questionário</button>
      </div>`;

    const selSubject = root.querySelector("#sel-subject");
    const selModule = root.querySelector("#sel-module");
    selSubject.addEventListener("change", () => renderSetup(root, App.getSubject(selSubject.value)));

    const preModule = App.qs("modulo");
    if (preModule) selModule.value = preModule;

    root.querySelector("#btn-start").addEventListener("click", () => {
      startQuiz(root, selSubject.value, selModule.value || null);
    });
  }

  function startQuiz(root, subjectId, moduleId) {
    const questions = buildQuestionSet(subjectId, moduleId);
    if (!questions.length) {
      root.innerHTML = '<div class="empty-state">Nenhuma pergunta cadastrada ainda para essa seleção.</div>';
      return;
    }
    state = {
      subjectId, moduleId, questions, idx: 0, correct: 0,
      startedAt: Date.now(), answered: false
    };
    renderQuestion(root);
  }

  function renderQuestion(root) {
    const q = state.questions[state.idx];
    const pct = Math.round((state.idx / state.questions.length) * 100);
    root.innerHTML = `
      <div class="page-narrow" style="margin:0 auto">
        <div class="q-progress"><span>Pergunta ${state.idx + 1} de ${state.questions.length}</span><span>Acertos: ${state.correct}</span></div>
        <div class="q-bar"><span style="width:${pct}%"></span></div>
        <h2 style="font-size:1.2rem">${App.escapeHtml(q.question)}</h2>
        <div class="option-list" id="option-list"></div>
        <div id="explain-slot"></div>
        <div class="btn-row" style="margin-top:20px; justify-content:flex-end">
          <button class="btn btn-primary" id="btn-next" style="display:none">Próxima →</button>
        </div>
      </div>`;

    const list = root.querySelector("#option-list");
    q.shuffledOptions.forEach((opt, i) => {
      const b = document.createElement("button");
      b.className = "option";
      b.textContent = opt.text;
      b.addEventListener("click", () => answer(root, q, opt, i));
      list.appendChild(b);
    });
  }

  function answer(root, q, chosen, chosenIdx) {
    if (state.answered) return;
    state.answered = true;
    if (chosen.isCorrect) state.correct++;

    const buttons = root.querySelectorAll(".option");
    buttons.forEach((b, i) => {
      b.disabled = true;
      if (q.shuffledOptions[i].isCorrect) b.classList.add("correct");
      else if (i === chosenIdx) b.classList.add("incorrect");
    });

    const slot = root.querySelector("#explain-slot");
    slot.innerHTML = `<div class="explain ${chosen.isCorrect ? "ok" : "bad"}">
      <strong>${chosen.isCorrect ? "✓ Correto." : "✗ Não é isso."}</strong> ${App.escapeHtml(q.explanation || "")}
    </div>`;

    root.querySelector("#btn-next").style.display = "inline-flex";
    root.querySelector("#btn-next").addEventListener("click", () => next(root));
  }

  function next(root) {
    state.idx++;
    state.answered = false;
    if (state.idx >= state.questions.length) {
      finish(root);
    } else {
      renderQuestion(root);
    }
  }

  function finish(root) {
    const total = state.questions.length;
    const durationSec = (Date.now() - state.startedAt) / 1000;
    const pct = Math.round((state.correct / total) * 100);
    window.Store.addQuizResult({
      subject: state.subjectId, module: state.moduleId || "geral",
      correct: state.correct, total, durationSec
    });

    root.innerHTML = `
      <div class="page-narrow" style="margin:0 auto; text-align:center">
        <h1>Resultado do questionário</h1>
        <div class="score-ring-wrap"><div id="ring"></div></div>
        <p class="lede">${state.correct} de ${total} corretas · ${App.fmtDuration(durationSec)}</p>
        <div class="btn-row" style="justify-content:center; margin-top:20px">
          <button class="btn btn-primary" id="btn-retry">🔁 Tentar de novo</button>
          <a class="btn btn-ghost" href="ranking.html">📈 Ver evolução</a>
          <a class="btn btn-ghost" href="index.html">🏠 Painel</a>
        </div>
      </div>`;
    Charts.ring(root.querySelector("#ring"), pct, { size: 150, color: pct >= 70 ? "#059669" : pct >= 40 ? "#d97706" : "#dc2626" });
    root.querySelector("#btn-retry").addEventListener("click", () => startQuiz(root, state.subjectId, state.moduleId));
  }

  async function initQuizPage() {
    await App.loadAllData();
    const root = document.getElementById("app-root");
    const subjectId = App.qs("materia") || window.APP_DATA.registry.subjects[0].id;
    const subject = App.getSubject(subjectId);
    renderSetup(root, subject);
    if (App.qs("modulo")) {
      startQuiz(root, subject.id, App.qs("modulo"));
    }
  }

  window.initQuizPage = initQuizPage;
})();
