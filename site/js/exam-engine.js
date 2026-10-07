/*
 * Simulado: prova cronometrada, sem feedback imediato, com navegador de
 * questões e revisão completa (com explicações) só depois de enviar.
 */
(function () {
  let state = null;
  let tickHandle = null;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function sampleProportional(pool, perModule) {
    const byModule = {};
    pool.forEach(q => {
      const key = (q._subjectId || "") + "|" + q.module;
      (byModule[key] = byModule[key] || []).push(q);
    });
    let out = [];
    Object.keys(byModule).forEach(m => {
      out = out.concat(shuffle(byModule[m]).slice(0, perModule));
    });
    return shuffle(out);
  }

  function buildExamQuestions(targetId) {
    const reg = window.APP_DATA.registry;
    let pool = [], cfg;
    if (targetId === "geral") {
      cfg = window.APP_DATA.simulados.geral;
      reg.subjects.forEach(s => {
        const label = `${s.icon} ${s.short}`;
        const tagged = (window.APP_DATA.quizzes[s.id] || []).map(q => Object.assign({ subjectLabel: label, _subjectId: s.id }, q));
        pool = pool.concat(tagged);
      });
    } else {
      cfg = window.APP_DATA.simulados[targetId];
      pool = window.APP_DATA.quizzes[targetId] || [];
    }
    const perModule = (cfg && cfg.questionsPerModule) || 3;
    const questions = sampleProportional(pool, perModule).map(q => {
      const optOrder = shuffle(q.options.map((text, i) => ({ text, isCorrect: i === q.correctIndex })));
      return Object.assign({}, q, { shuffledOptions: optOrder, picked: null, flagged: false });
    });
    return { cfg, questions };
  }

  function renderSetup(root) {
    const reg = window.APP_DATA.registry;
    const opts = reg.subjects.map(s => `<option value="${s.id}">${s.name}</option>`).join("");
    root.innerHTML = `
      <div class="pagehead"><h1>🎯 Simulado</h1>
      <p class="lede">Prova cronometrada, sem gabarito até o final — do jeito que cai na prova de verdade.</p></div>
      <div class="card quiz-setup" style="max-width:480px">
        <label class="select-field">Escopo
          <select id="sel-target">${opts}<option value="geral">🔀 Geral (as 3 matérias misturadas)</option></select>
        </label>
        <div id="target-info" class="callout"></div>
        <button class="btn btn-primary btn-lg" id="btn-start">Iniciar simulado</button>
      </div>`;

    const sel = root.querySelector("#sel-target");
    function updateInfo() {
      const { cfg, questions } = buildExamQuestions(sel.value);
      root.querySelector("#target-info").innerHTML =
        `<strong>${questions.length} questões</strong> · tempo: <strong>${cfg ? cfg.timeLimitMinutes : 30} minutos</strong>. Correção e explicações aparecem só depois de enviar.`;
    }
    sel.addEventListener("change", updateInfo);
    updateInfo();

    root.querySelector("#btn-start").addEventListener("click", () => startExam(root, sel.value));
  }

  function startExam(root, targetId) {
    const { cfg, questions } = buildExamQuestions(targetId);
    if (!questions.length) {
      root.innerHTML = '<div class="empty-state">Nenhuma pergunta cadastrada ainda para esse escopo.</div>';
      return;
    }
    state = {
      targetId, title: (cfg && cfg.title) || "Simulado",
      questions, cur: 0,
      secondsLeft: ((cfg && cfg.timeLimitMinutes) || 30) * 60,
      startedAt: Date.now(), submitted: false
    };
    tickHandle = setInterval(tick, 1000);
    renderExam(root);
  }

  function tick() {
    state.secondsLeft--;
    const chip = document.getElementById("timer-chip");
    if (chip) {
      chip.textContent = App.fmtClock(state.secondsLeft);
      chip.classList.toggle("low", state.secondsLeft <= 60);
    }
    if (state.secondsLeft <= 0) {
      clearInterval(tickHandle);
      submitExam(document.getElementById("app-root"));
    }
  }

  function renderExam(root) {
    const q = state.questions[state.cur];
    root.innerHTML = `
      <div class="toolbar" style="justify-content:space-between">
        <h1 style="margin:0">${App.escapeHtml(state.title)}</h1>
        <span class="timer-chip" id="timer-chip">${App.fmtClock(state.secondsLeft)}</span>
      </div>
      <div class="exam-grid" id="exam-grid"></div>
      <div class="page-narrow" style="margin:0 auto">
        <div class="q-progress"><span>Questão ${state.cur + 1} de ${state.questions.length}</span><span>${App.escapeHtml(q.subjectLabel || "")}</span></div>
        <h2 style="font-size:1.2rem">${App.escapeHtml(q.question)}</h2>
        <div class="option-list" id="option-list"></div>
        <div class="btn-row" style="margin-top:20px; justify-content:space-between">
          <button class="btn btn-ghost" id="btn-flag">${q.flagged ? "🚩 Desmarcar revisão" : "🏳️ Marcar p/ revisar"}</button>
          <div class="btn-row">
            <button class="btn btn-ghost" id="btn-prev" ${state.cur === 0 ? "disabled" : ""}>← Anterior</button>
            ${state.cur === state.questions.length - 1
              ? '<button class="btn btn-primary" id="btn-submit">Enviar simulado</button>'
              : '<button class="btn btn-primary" id="btn-next">Próxima →</button>'}
          </div>
        </div>
      </div>`;

    renderGrid(root);

    const list = root.querySelector("#option-list");
    q.shuffledOptions.forEach((opt, i) => {
      const b = document.createElement("button");
      b.className = "option" + (q.picked === i ? " selected" : "");
      b.textContent = opt.text;
      b.addEventListener("click", () => {
        q.picked = i;
        renderExam(root);
      });
      list.appendChild(b);
    });

    root.querySelector("#btn-flag").addEventListener("click", () => { q.flagged = !q.flagged; renderExam(root); });
    const prevBtn = root.querySelector("#btn-prev");
    if (prevBtn) prevBtn.addEventListener("click", () => { state.cur--; renderExam(root); });
    const nextBtn = root.querySelector("#btn-next");
    if (nextBtn) nextBtn.addEventListener("click", () => { state.cur++; renderExam(root); });
    const submitBtn = root.querySelector("#btn-submit");
    if (submitBtn) submitBtn.addEventListener("click", () => {
      const unanswered = state.questions.filter(x => x.picked === null).length;
      if (unanswered > 0 && !confirm(`Você deixou ${unanswered} questão(ões) sem resposta. Enviar mesmo assim?`)) return;
      clearInterval(tickHandle);
      submitExam(root);
    });
  }

  function renderGrid(root) {
    const grid = root.querySelector("#exam-grid");
    grid.innerHTML = "";
    state.questions.forEach((q, i) => {
      const b = document.createElement("button");
      let cls = "";
      if (q.picked !== null) cls += " answered";
      if (i === state.cur) cls += " current";
      if (q.flagged) cls += " flagged";
      b.className = cls.trim();
      b.textContent = i + 1;
      b.addEventListener("click", () => { state.cur = i; renderExam(root); });
      grid.appendChild(b);
    });
  }

  function submitExam(root) {
    if (state.submitted) return;
    state.submitted = true;
    const durationSec = (Date.now() - state.startedAt) / 1000;
    const correct = state.questions.filter(q => q.picked !== null && q.shuffledOptions[q.picked].isCorrect).length;
    const total = state.questions.length;

    const perModule = {};
    state.questions.forEach(q => {
      perModule[q.module] = perModule[q.module] || { correct: 0, total: 0 };
      perModule[q.module].total++;
      if (q.picked !== null && q.shuffledOptions[q.picked].isCorrect) perModule[q.module].correct++;
    });

    window.Store.addExamResult({
      subject: state.targetId, correct, total, durationSec, perModule
    });

    const pct = Math.round((correct / total) * 100);
    root.innerHTML = `
      <div class="page-narrow" style="margin:0 auto; text-align:center">
        <h1>Resultado do simulado</h1>
        <div class="score-ring-wrap"><div id="ring"></div></div>
        <p class="lede">${correct} de ${total} corretas · ${App.fmtDuration(durationSec)}</p>
        <div class="btn-row" style="justify-content:center; margin:18px 0 30px">
          <a class="btn btn-ghost" href="ranking.html">📈 Ver evolução</a>
          <a class="btn btn-ghost" href="index.html">🏠 Painel</a>
          <button class="btn btn-primary" id="btn-review">🔍 Revisar respostas</button>
        </div>
        <div id="review" style="text-align:left"></div>
      </div>`;
    Charts.ring(root.querySelector("#ring"), pct, { size: 150, color: pct >= 70 ? "#059669" : pct >= 40 ? "#d97706" : "#dc2626" });

    root.querySelector("#btn-review").addEventListener("click", () => {
      const rev = root.querySelector("#review");
      rev.innerHTML = state.questions.map((q, i) => {
        const gotIt = q.picked !== null && q.shuffledOptions[q.picked].isCorrect;
        const pickedText = q.picked !== null ? q.shuffledOptions[q.picked].text : "(sem resposta)";
        const correctText = q.shuffledOptions.find(o => o.isCorrect).text;
        return `<div class="review-item">
          <span class="tag ${gotIt ? "ok" : "bad"}">${gotIt ? "Correta" : "Incorreta"}</span>
          <p style="margin:8px 0 6px"><strong>${i + 1}. ${App.escapeHtml(q.question)}</strong></p>
          <p style="margin:0 0 4px">Sua resposta: ${App.escapeHtml(pickedText)}</p>
          ${!gotIt ? `<p style="margin:0 0 4px">Resposta correta: <strong>${App.escapeHtml(correctText)}</strong></p>` : ""}
          <p style="margin:0; color:var(--text-muted); font-size:0.88rem">${App.escapeHtml(q.explanation || "")}</p>
        </div>`;
      }).join("");
      root.querySelector("#btn-review").style.display = "none";
    });
  }

  async function initSimuladoPage() {
    await App.loadAllData();
    const root = document.getElementById("app-root");
    renderSetup(root);
  }

  window.initSimuladoPage = initSimuladoPage;
})();
