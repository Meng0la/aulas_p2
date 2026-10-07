/*
 * Utilitários comuns: carregador dinâmico de todos os arquivos de dados
 * (data/registry.js + um .js por módulo/quiz/simulado) e montagem da
 * barra de navegação. Funciona abrindo o index.html direto no navegador
 * (file://), sem precisar de servidor, porque usa <script> dinâmico em vez
 * de fetch/XHR (que o Chrome bloqueia para arquivos locais).
 */
(function () {
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = () => resolve(src);
      s.onerror = () => { console.warn("Não achei:", src); resolve(src); };
      document.head.appendChild(s);
    });
  }

  async function loadAllData() {
    await loadScript("data/registry.js");
    const subjects = window.APP_DATA.registry.subjects;
    const tasks = [];
    subjects.forEach(subj => {
      tasks.push(loadScript(`data/${subj.id}/quiz.js`));
      subj.modules.forEach(mod => {
        tasks.push(loadScript(`data/${subj.id}/${mod.id}.js`));
      });
    });
    tasks.push(loadScript("data/simulados/geral.js"));
    subjects.forEach(subj => tasks.push(loadScript(`data/simulados/${subj.id}.js`)));
    await Promise.all(tasks);
    return window.APP_DATA;
  }

  const NAV_LINKS = [
    { href: "index.html", label: "Painel" },
    { href: "disciplina.html", label: "Estudar" },
    { href: "quiz.html", label: "Questionário" },
    { href: "simulado.html", label: "Simulado" },
    { href: "ranking.html", label: "Evolução" }
  ];

  function buildNav(activeHref) {
    const nav = document.createElement("div");
    nav.className = "topnav";
    const current = activeHref || location.pathname.split("/").pop() || "index.html";
    nav.innerHTML = `
      <div class="topnav-inner">
        <div class="brand">🎓 <span>Estudos</span></div>
        <nav>${NAV_LINKS.map(l => `<a href="${l.href}" class="${l.href === current ? "active" : ""}">${l.label}</a>`).join("")}</nav>
      </div>`;
    document.body.insertBefore(nav, document.body.firstChild);
  }

  function fmtDuration(totalSeconds) {
    const s = Math.round(totalSeconds || 0);
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    if (h > 0) return `${h}h ${m}min`;
    if (m > 0) return `${m}min`;
    return `${s}s`;
  }

  function fmtClock(totalSeconds) {
    const s = Math.max(0, Math.round(totalSeconds));
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }

  function fmtDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "2-digit" }) +
      " " + d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function getSubject(id) {
    return window.APP_DATA.registry.subjects.find(s => s.id === id);
  }

  function qs(name) {
    return new URLSearchParams(location.search).get(name);
  }

  window.App = { loadAllData, buildNav, fmtDuration, fmtClock, fmtDate, escapeHtml, getSubject, qs };
})();
