/*
 * Única porta de entrada para o localStorage.
 * Tudo que o site salva (progresso, tempo estudado, resultados de quiz/simulado)
 * passa por aqui. Se um dia quiser trocar para um banco de dados (Supabase, etc.),
 * basta reimplementar as funções deste arquivo mantendo a mesma assinatura.
 */
(function () {
  const KEY = "estudos_app_v1";

  function emptyState() {
    return {
      version: 1,
      progress: {},      // progress[subject][moduleId] = { read: true, readAt: iso }
      studySessions: [],  // { ts, subject, module, seconds }
      quizResults: [],    // { ts, subject, module, correct, total, durationSec }
      examResults: []      // { ts, subject ('geral' ou id), correct, total, durationSec, perModule: {} }
    };
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return emptyState();
      const parsed = JSON.parse(raw);
      return Object.assign(emptyState(), parsed);
    } catch (e) {
      console.warn("Falha ao ler localStorage, iniciando estado novo.", e);
      return emptyState();
    }
  }

  function save(state) {
    localStorage.setItem(KEY, JSON.stringify(state));
  }

  const Store = {
    getState: load,

    markModuleRead(subject, moduleId) {
      const s = load();
      s.progress[subject] = s.progress[subject] || {};
      s.progress[subject][moduleId] = { read: true, readAt: new Date().toISOString() };
      save(s);
    },

    isModuleRead(subject, moduleId) {
      const s = load();
      return !!(s.progress[subject] && s.progress[subject][moduleId] && s.progress[subject][moduleId].read);
    },

    getSubjectProgress(subject, totalModules) {
      const s = load();
      const done = s.progress[subject] ? Object.keys(s.progress[subject]).filter(k => s.progress[subject][k].read).length : 0;
      return { done, total: totalModules, pct: totalModules ? Math.round((done / totalModules) * 100) : 0 };
    },

    addStudySession(subject, moduleId, seconds) {
      if (!seconds || seconds < 3) return; // ignora sessões irrelevantes
      const s = load();
      s.studySessions.push({ ts: new Date().toISOString(), subject, module: moduleId, seconds: Math.round(seconds) });
      save(s);
    },

    getStudyTimeBySubject(subject) {
      const s = load();
      return s.studySessions.filter(x => x.subject === subject).reduce((a, x) => a + x.seconds, 0);
    },

    getTotalStudyTime() {
      const s = load();
      return s.studySessions.reduce((a, x) => a + x.seconds, 0);
    },

    getStudyTimeByDay(daysBack) {
      const s = load();
      const out = {};
      const now = new Date();
      for (let i = daysBack - 1; i >= 0; i--) {
        const d = new Date(now); d.setDate(d.getDate() - i);
        out[d.toISOString().slice(0, 10)] = 0;
      }
      s.studySessions.forEach(x => {
        const day = x.ts.slice(0, 10);
        if (day in out) out[day] += x.seconds;
      });
      return out;
    },

    addQuizResult(r) {
      const s = load();
      s.quizResults.push(Object.assign({ ts: new Date().toISOString() }, r));
      save(s);
    },

    addExamResult(r) {
      const s = load();
      s.examResults.push(Object.assign({ ts: new Date().toISOString() }, r));
      save(s);
    },

    getQuizResults(subject) {
      const s = load();
      return subject ? s.quizResults.filter(r => r.subject === subject) : s.quizResults;
    },

    getExamResults(subject) {
      const s = load();
      return subject ? s.examResults.filter(r => r.subject === subject) : s.examResults;
    },

    getAllAttempts(subject) {
      const s = load();
      const quizzes = (subject ? s.quizResults.filter(r => r.subject === subject) : s.quizResults).map(r => Object.assign({ kind: "quiz" }, r));
      const exams = (subject ? s.examResults.filter(r => r.subject === subject) : s.examResults).map(r => Object.assign({ kind: "simulado" }, r));
      return quizzes.concat(exams).sort((a, b) => new Date(a.ts) - new Date(b.ts));
    },

    getBestAttempts(subject, limit) {
      const all = this.getAllAttempts(subject).map(a => Object.assign({ pct: a.total ? Math.round((a.correct / a.total) * 100) : 0 }, a));
      all.sort((a, b) => b.pct - a.pct || a.durationSec - b.durationSec);
      return limit ? all.slice(0, limit) : all;
    },

    resetAll() {
      localStorage.removeItem(KEY);
    }
  };

  window.Store = Store;
})();
