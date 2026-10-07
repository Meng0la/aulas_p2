(function () {
  async function initRankingPage() {
    await App.loadAllData();
    const root = document.getElementById("app-root");
    const subjects = window.APP_DATA.registry.subjects;

    root.innerHTML = `
      <div class="pagehead"><h1>📈 Evolução e ranking</h1>
      <p class="lede">Seu progresso ao longo do tempo, salvo neste navegador.</p></div>
      <div class="toolbar">
        <label class="select-field">Matéria
          <select id="sel-subject"><option value="">Todas</option>${subjects.map(s => `<option value="${s.id}">${s.name}</option>`).join("")}</select>
        </label>
        <button class="btn btn-ghost" id="btn-reset">🗑️ Limpar meus dados</button>
      </div>
      <div class="chart-card">
        <h3>Evolução da pontuação</h3>
        <div class="sub">Percentual de acerto em cada questionário/simulado, em ordem cronológica</div>
        <div id="chart-evolution"></div>
      </div>
      <div class="chart-card">
        <h3>Tempo estudado por matéria</h3>
        <div class="sub">Total acumulado desde que você começou a usar o site</div>
        <div id="chart-time"></div>
      </div>
      <div class="chart-card">
        <h3>🏆 Melhores tentativas</h3>
        <div class="sub">Suas pontuações mais altas (desempate pelo menor tempo)</div>
        <div id="leaderboard"></div>
      </div>
    `;

    const sel = root.querySelector("#sel-subject");
    sel.addEventListener("change", () => render(sel.value || null));
    root.querySelector("#btn-reset").addEventListener("click", () => {
      if (confirm("Isso vai apagar todo o progresso, tempo estudado e histórico salvos neste navegador. Confirmar?")) {
        window.Store.resetAll();
        render(sel.value || null);
      }
    });

    function render(subjectId) {
      const attempts = window.Store.getAllAttempts(subjectId);
      const points = attempts.map((a, i) => ({
        label: new Date(a.ts).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" }),
        pct: Math.round((a.correct / a.total) * 100)
      }));
      Charts.lineChart(root.querySelector("#chart-evolution"), points, { color: "#2563eb" });

      const bars = subjects
        .filter(s => !subjectId || s.id === subjectId)
        .map(s => {
          const secs = window.Store.getStudyTimeBySubject(s.id);
          return { label: s.short, value: secs, valueLabel: secs ? App.fmtDuration(secs) : "", color: s.color };
        });
      Charts.barChart(root.querySelector("#chart-time"), bars);

      const best = window.Store.getBestAttempts(subjectId, 15);
      const lb = root.querySelector("#leaderboard");
      if (!best.length) {
        lb.innerHTML = '<div class="empty-state"><div class="big">🗒️</div>Faça um questionário ou simulado para aparecer aqui.</div>';
        return;
      }
      lb.innerHTML = `<table class="leaderboard"><thead><tr>
        <th>#</th><th>Tipo</th><th>Matéria</th><th>Acerto</th><th>Tempo</th><th>Data</th>
      </tr></thead><tbody>
        ${best.map((a, i) => {
          const subj = App.getSubject(a.subject);
          const subjName = subj ? subj.short : (a.subject === "geral" ? "Geral" : a.subject);
          return `<tr>
            <td>${i + 1}</td>
            <td><span class="pill">${a.kind === "simulado" ? "Simulado" : "Questionário"}</span></td>
            <td>${App.escapeHtml(subjName)}</td>
            <td>${a.correct}/${a.total} (${a.pct}%)</td>
            <td>${App.fmtDuration(a.durationSec)}</td>
            <td>${App.fmtDate(a.ts)}</td>
          </tr>`;
        }).join("")}
      </tbody></table>`;
    }

    render(null);
  }
  window.initRankingPage = initRankingPage;
})();
