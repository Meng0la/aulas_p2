/*
 * Renderiza a página de estudo (disciplina.html) a partir dos dados em
 * data/<materia>/<modulo>.js (window.APP_DATA.content).
 */
(function () {
  function renderSection(sec) {
    let html = `<h2>${App.escapeHtml(sec.heading)}</h2>`;
    html += sec.html;
    (sec.images || []).forEach(img => {
      html += `<figure class="figure">
        <img src="${img.src}" alt="${App.escapeHtml(img.alt || img.caption || "")}">
        ${img.caption ? `<figcaption>${App.escapeHtml(img.caption)}</figcaption>` : ""}
      </figure>`;
    });
    return html;
  }

  function renderModuleNav(subject, currentModuleId) {
    const items = subject.modules.map(m => {
      const read = window.Store.isModuleRead(subject.id, m.id);
      const active = m.id === currentModuleId;
      return `<a href="disciplina.html?materia=${subject.id}&modulo=${m.id}" class="${active ? "active" : ""}">
        <span class="tick">${read ? "✓" : "○"}</span> ${m.order}. ${App.escapeHtml(m.title)}
      </a>`;
    }).join("");
    return `<nav class="module-nav">${items}</nav>`;
  }

  async function initDisciplinaPage() {
    await App.loadAllData();
    const subjectId = App.qs("materia") || window.APP_DATA.registry.subjects[0].id;
    const subject = App.getSubject(subjectId);
    const root = document.getElementById("app-root");

    if (!subject) {
      root.innerHTML = '<div class="empty-state">Matéria não encontrada.</div>';
      return;
    }

    const moduleId = App.qs("modulo") || subject.modules[0].id;
    const moduleMeta = subject.modules.find(m => m.id === moduleId);
    const content = (window.APP_DATA.content[subject.id] || {})[moduleId];

    if (!moduleMeta || !content) {
      root.innerHTML = '<div class="empty-state">Módulo não encontrado ou ainda não cadastrado.</div>';
      return;
    }

    document.title = `${content.title} — ${subject.short}`;

    const idx = subject.modules.findIndex(m => m.id === moduleId);
    const prev = subject.modules[idx - 1];
    const next = subject.modules[idx + 1];

    root.innerHTML = `
      <div class="breadcrumb"><a href="index.html">Painel</a> / ${App.escapeHtml(subject.name)}</div>
      <div class="pagehead">
        <h1>${moduleMeta.order}. ${App.escapeHtml(content.title)}</h1>
        ${content.subtitle ? `<p class="lede">${App.escapeHtml(content.subtitle)}</p>` : ""}
      </div>
      <div class="study-layout">
        <div>${renderModuleNav(subject, moduleId)}
          <div style="margin-top:14px" class="btn-row">
            <a class="btn btn-ghost" href="quiz.html?materia=${subject.id}&modulo=${moduleId}">📝 Questionário deste módulo</a>
          </div>
        </div>
        <div>
          <article class="study-article">
            ${content.sections.map(renderSection).join("")}
            ${content.keyPoints && content.keyPoints.length ? `
              <div class="keypoints">
                <h3>📌 Pontos-chave</h3>
                <ul>${content.keyPoints.map(k => `<li>${k}</li>`).join("")}</ul>
              </div>` : ""}
          </article>
          <div class="btn-row" style="margin-top:28px; justify-content:space-between">
            <div>${prev ? `<a class="btn btn-ghost" href="disciplina.html?materia=${subject.id}&modulo=${prev.id}">← ${App.escapeHtml(prev.title)}</a>` : "<span></span>"}</div>
            <button class="btn btn-primary" id="btn-mark-read">✓ Marcar como concluído</button>
            <div>${next ? `<a class="btn btn-ghost" href="disciplina.html?materia=${subject.id}&modulo=${next.id}">${App.escapeHtml(next.title)} →</a>` : "<span></span>"}</div>
          </div>
        </div>
      </div>
      <div class="progress-floating"><span class="dot"></span> Contando tempo de estudo…</div>
    `;

    const btn = document.getElementById("btn-mark-read");
    function syncBtn() {
      const read = window.Store.isModuleRead(subject.id, moduleId);
      btn.textContent = read ? "✓ Concluído" : "✓ Marcar como concluído";
      btn.classList.toggle("btn-ghost", read);
      btn.classList.toggle("btn-primary", !read);
    }
    syncBtn();
    btn.addEventListener("click", () => {
      window.Store.markModuleRead(subject.id, moduleId);
      syncBtn();
      document.querySelectorAll(".module-nav a.active .tick")[0].textContent = "✓";
    });

    const timer = new StudyTimer(subject.id, moduleId);
    timer.start();
    window.addEventListener("pagehide", () => timer.stop());
  }

  window.initDisciplinaPage = initDisciplinaPage;
})();
