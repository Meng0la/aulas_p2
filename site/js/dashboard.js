(function () {
  async function initDashboard() {
    await App.loadAllData();
    const root = document.getElementById("app-root");
    const subjects = window.APP_DATA.registry.subjects;
    const totalTime = window.Store.getTotalStudyTime();
    const allAttempts = window.Store.getAllAttempts();
    const avgPct = allAttempts.length
      ? Math.round(allAttempts.reduce((a, r) => a + (r.correct / r.total) * 100, 0) / allAttempts.length)
      : null;
    let totalDone = 0, totalModules = 0;
    subjects.forEach(s => {
      const p = window.Store.getSubjectProgress(s.id, s.modules.length);
      totalDone += p.done; totalModules += p.total;
    });

    root.innerHTML = `
      <div class="pagehead">
        <h1>Painel de estudos</h1>
        <p class="lede">Sistema Operacional I · Banco de Dados · Ética, Cidadania e Sustentabilidade</p>
      </div>
      <div class="stat-row">
        <div class="stat-card"><div class="num">${App.fmtDuration(totalTime)}</div><div class="lbl">Tempo estudado</div></div>
        <div class="stat-card"><div class="num">${totalDone}/${totalModules}</div><div class="lbl">Módulos concluídos</div></div>
        <div class="stat-card"><div class="num">${allAttempts.length}</div><div class="lbl">Questionários / simulados feitos</div></div>
        <div class="stat-card"><div class="num">${avgPct === null ? "—" : avgPct + "%"}</div><div class="lbl">Média de acertos</div></div>
      </div>
      <div class="grid grid-3" id="subject-cards"></div>
      <div class="btn-row" style="margin-top:28px">
        <a class="btn btn-primary btn-lg" href="simulado.html">🎯 Fazer um simulado</a>
        <a class="btn btn-ghost btn-lg" href="ranking.html">📈 Ver evolução e ranking</a>
      </div>
    `;

    const cardsEl = root.querySelector("#subject-cards");
    subjects.forEach(s => {
      const p = window.Store.getSubjectProgress(s.id, s.modules.length);
      const firstUnread = s.modules.find(m => !window.Store.isModuleRead(s.id, m.id)) || s.modules[0];
      const card = document.createElement("a");
      card.href = `disciplina.html?materia=${s.id}&modulo=${firstUnread.id}`;
      card.className = "card subject-card";
      card.innerHTML = `
        <span class="icon">${s.icon}</span>
        <h3>${App.escapeHtml(s.name)}</h3>
        <div class="muted">${p.done} de ${p.total} módulos concluídos</div>
        <div class="bar"><span style="width:${p.pct}%; background:${s.color}"></span></div>
        <div class="pct">${p.pct}% concluído</div>
      `;
      cardsEl.appendChild(card);
    });
  }
  window.initDashboard = initDashboard;
})();
