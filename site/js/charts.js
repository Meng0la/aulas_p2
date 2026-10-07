/*
 * Gráficos simples em SVG puro, sem biblioteca externa (mantém o site
 * 100% offline). Cada função recebe um elemento container e os dados,
 * e escreve um <svg> dentro dele.
 */
(function () {
  const NS = "http://www.w3.org/2000/svg";
  function el(tag, attrs) {
    const e = document.createElementNS(NS, tag);
    Object.keys(attrs || {}).forEach(k => e.setAttribute(k, attrs[k]));
    return e;
  }

  // Gráfico de linha: evolução do percentual de acerto ao longo das tentativas.
  function lineChart(container, points, opts) {
    opts = opts || {};
    container.innerHTML = "";
    if (!points.length) {
      container.innerHTML = '<div class="empty-state">Ainda não há tentativas registradas.</div>';
      return;
    }
    const w = container.clientWidth || 640, h = opts.height || 220;
    const padL = 34, padR = 14, padT = 16, padB = 28;
    const innerW = w - padL - padR, innerH = h - padT - padB;
    const svg = el("svg", { viewBox: `0 0 ${w} ${h}`, width: "100%", height: h });

    const color = opts.color || "#2563eb";
    const n = points.length;
    const xAt = i => padL + (n === 1 ? innerW / 2 : (innerW * i) / (n - 1));
    const yAt = v => padT + innerH - (innerH * v) / 100;

    // grid lines 0/50/100
    [0, 50, 100].forEach(v => {
      const y = yAt(v);
      svg.appendChild(el("line", { x1: padL, x2: w - padR, y1: y, y2: y, stroke: "var(--border)", "stroke-width": 1 }));
      const t = el("text", { x: 4, y: y + 4, "font-size": 10, fill: "var(--text-muted)" });
      t.textContent = v + "%";
      svg.appendChild(t);
    });

    const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${xAt(i)} ${yAt(p.pct)}`).join(" ");
    svg.appendChild(el("path", { d: path, fill: "none", stroke: color, "stroke-width": 2.5, "stroke-linejoin": "round", "stroke-linecap": "round" }));

    points.forEach((p, i) => {
      const c = el("circle", { cx: xAt(i), cy: yAt(p.pct), r: 4, fill: color });
      const title = el("title", {});
      title.textContent = `${p.label}: ${p.pct}%`;
      c.appendChild(title);
      svg.appendChild(c);
    });

    if (n <= 14) {
      points.forEach((p, i) => {
        if (n > 8 && i % 2 === 1) return;
        const t = el("text", { x: xAt(i), y: h - 8, "font-size": 9, fill: "var(--text-muted)", "text-anchor": "middle" });
        t.textContent = p.label;
        svg.appendChild(t);
      });
    }

    container.appendChild(svg);
  }

  // Gráfico de barras: tempo estudado (segundos) por categoria.
  function barChart(container, bars, opts) {
    opts = opts || {};
    container.innerHTML = "";
    if (!bars.length || bars.every(b => b.value === 0)) {
      container.innerHTML = '<div class="empty-state">Ainda não há tempo de estudo registrado.</div>';
      return;
    }
    const w = container.clientWidth || 640, h = opts.height || 200;
    const padL = 10, padR = 10, padT = 10, padB = 34;
    const innerW = w - padL - padR, innerH = h - padT - padB;
    const max = Math.max(...bars.map(b => b.value), 1);
    const gap = 14;
    const bw = (innerW - gap * (bars.length - 1)) / bars.length;

    const svg = el("svg", { viewBox: `0 0 ${w} ${h}`, width: "100%", height: h });
    bars.forEach((b, i) => {
      const bh = Math.max(2, (innerH * b.value) / max);
      const x = padL + i * (bw + gap);
      const y = padT + innerH - bh;
      svg.appendChild(el("rect", { x, y, width: bw, height: bh, rx: 6, fill: b.color || "#2563eb" }));
      const vt = el("text", { x: x + bw / 2, y: y - 6, "font-size": 10, "text-anchor": "middle", fill: "var(--text-muted)" });
      vt.textContent = b.valueLabel || "";
      svg.appendChild(vt);
      const lt = el("text", { x: x + bw / 2, y: h - 12, "font-size": 10, "text-anchor": "middle", fill: "var(--text-muted)" });
      lt.textContent = b.label;
      svg.appendChild(lt);
    });
    container.appendChild(svg);
  }

  // Anel de progresso simples (percentual).
  function ring(container, pct, opts) {
    opts = opts || {};
    const size = opts.size || 120, stroke = opts.stroke || 12;
    const r = (size - stroke) / 2, c = 2 * Math.PI * r;
    const color = opts.color || "#2563eb";
    const svg = el("svg", { viewBox: `0 0 ${size} ${size}`, width: size, height: size });
    svg.appendChild(el("circle", { cx: size / 2, cy: size / 2, r, fill: "none", stroke: "var(--border)", "stroke-width": stroke }));
    const circ = el("circle", {
      cx: size / 2, cy: size / 2, r, fill: "none", stroke: color, "stroke-width": stroke,
      "stroke-dasharray": `${c}`, "stroke-dashoffset": `${c * (1 - pct / 100)}`,
      "stroke-linecap": "round", transform: `rotate(-90 ${size / 2} ${size / 2})`
    });
    svg.appendChild(circ);
    const t = el("text", { x: "50%", y: "50%", "text-anchor": "middle", "dominant-baseline": "central", "font-size": size * 0.22, "font-weight": 800, fill: "var(--text)" });
    t.textContent = Math.round(pct) + "%";
    svg.appendChild(t);
    container.innerHTML = "";
    container.appendChild(svg);
  }

  window.Charts = { lineChart, barChart, ring };
})();
