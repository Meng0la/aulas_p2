/*
 * Cronômetro de tempo de estudo. Conta enquanto a aba está em foco e
 * grava a sessão (via Store.addStudySession) quando para ou a página é fechada.
 */
(function () {
  function StudyTimer(subject, moduleId) {
    this.subject = subject;
    this.moduleId = moduleId;
    this.accumulated = 0;
    this.runningSince = null;
    this.saved = false;
    this._onVisibility = this._onVisibility.bind(this);
    this._onUnload = this._onUnload.bind(this);
  }

  StudyTimer.prototype.start = function () {
    if (document.visibilityState === "visible") this.runningSince = Date.now();
    document.addEventListener("visibilitychange", this._onVisibility);
    window.addEventListener("beforeunload", this._onUnload);
    window.addEventListener("pagehide", this._onUnload);
  };

  StudyTimer.prototype._onVisibility = function () {
    if (document.visibilityState === "hidden") {
      this._accumulate();
    } else if (document.visibilityState === "visible") {
      this.runningSince = Date.now();
    }
  };

  StudyTimer.prototype._accumulate = function () {
    if (this.runningSince) {
      this.accumulated += (Date.now() - this.runningSince) / 1000;
      this.runningSince = null;
    }
  };

  StudyTimer.prototype.elapsedSeconds = function () {
    this._accumulate();
    return this.accumulated;
  };

  StudyTimer.prototype._onUnload = function () {
    this.stop();
  };

  StudyTimer.prototype.stop = function () {
    if (this.saved) return;
    this._accumulate();
    document.removeEventListener("visibilitychange", this._onVisibility);
    window.removeEventListener("beforeunload", this._onUnload);
    window.removeEventListener("pagehide", this._onUnload);
    if (this.accumulated >= 3) {
      window.Store.addStudySession(this.subject, this.moduleId, this.accumulated);
    }
    this.saved = true;
  };

  window.StudyTimer = StudyTimer;
})();
