(() => {
  // =========================================================
  //  EASY EDITS
  // =========================================================
  const START = new Date(2025, 11, 10); // Dec 10, 2025, the day she said yes (month is 0-based: 11 = December)

  // Photos live in assets/web/thumb (small) and assets/web/full (big).
  // Each chapter: cover = the 1-3 photos shown in the polaroid stack, photos = every photo in that chapter.
  const CHAPTERS = [
    {
      date: 'April 29, 2026 · morning', title: 'Where the trail began', tag: 'the trail',
      text: 'Sunglasses, a hoodie, muddy shoes, and you right next to me. We had no idea yet how good this day was about to get.',
      cover: ['IMG_6540', 'IMG_6530', 'IMG_6543'],
      photos: ['IMG_6530', 'IMG_6531', 'IMG_6538', 'IMG_6539', 'IMG_6540', 'IMG_6541', 'IMG_6543', 'IMG_6559']
    },
    {
      date: 'April 29, 2026 · midday', title: 'The day we chased a waterfall', tag: 'our waterfall',
      text: 'The water was loud, the rocks were slippery, and I still only noticed you. Some views are pretty. This one had you in it.',
      cover: ['IMG_6689', 'IMG_6674', 'IMG_6691'],
      photos: ['IMG_6673', 'IMG_6674', 'IMG_6675', 'IMG_6678', 'IMG_6689', 'IMG_6690', 'IMG_6691']
    },
    {
      date: 'April 29, 2026 · afternoon', title: 'Red cap, golden afternoon', tag: 'red cap day',
      text: 'Matching caps, silly faces, and a stolen kiss on the cheek. If I could replay one afternoon forever, it might be this one.',
      cover: ['IMG_6711', 'IMG_6709', 'IMG_6714'],
      photos: ['IMG_6701', 'IMG_6702', 'IMG_6703', 'IMG_6708', 'IMG_6709', 'IMG_6710', 'IMG_6711', 'IMG_6714', 'IMG_6715', 'IMG_6716', 'IMG_6717', 'IMG_6718', 'IMG_6719', 'IMG_6728', 'IMG_6729', 'IMG_6731', 'IMG_6732']
    },
    {
      date: 'June 15, 2026', title: 'Ordinary days, but with you', tag: 'school days',
      text: 'IDs on, classes waiting, and still the best part of the day was sitting beside you.',
      cover: ['IMG_6943', 'IMG_6942'],
      photos: ['IMG_6942', 'IMG_6943']
    },
    {
      date: 'July 5, 2026', title: 'Silly on the bench', tag: 'so silly',
      text: 'Peace signs, pouty faces, and too much laughing to take one normal picture. I wouldn\'t trade a single one.',
      cover: ['IMG_7214', 'IMG_7170', 'IMG_7184'],
      photos: ['IMG_7170', 'IMG_7184', 'IMG_7214', 'IMG_7249']
    },
    {
      date: 'July 26 – August 1, 2026', title: 'Our little food dates', tag: 'food date',
      text: 'Fries, drinks, and long talks across a small table. Food tastes better when you\'re the one across from me.',
      cover: ['IMG_7350', 'IMG_7325', 'IMG_7376'],
      photos: ['IMG_7325', 'IMG_7350', 'IMG_7351', 'IMG_7376']
    },
    {
      date: 'August 15, 2026', title: 'Back-seat selfies', tag: 'back seat',
      text: 'Five photos in ten seconds, because one was never enough when you\'re smiling like that.',
      cover: ['IMG_7401', 'IMG_7398', 'IMG_7400'],
      photos: ['IMG_7398', 'IMG_7399', 'IMG_7400', 'IMG_7401', 'IMG_7402']
    },
    {
      date: 'September 9, 2026', title: 'Too close for the camera', tag: 'cheek to cheek',
      text: 'One day before nine months. Cheek to cheek, and still not close enough for me.',
      cover: ['IMG_7526', 'IMG_7523', 'IMG_7527'],
      photos: ['IMG_7523', 'IMG_7525', 'IMG_7526', 'IMG_7527']
    },
    {
      date: 'September 2026', title: 'Photo booth & dressed-up days', tag: 'say cheese',
      text: 'Strips of us, posing like we\'re famous. You look like a star in every frame.',
      cover: ['IMG_7571', '20260916_201017722', 'IMG_7560'],
      photos: ['20260916_201017722', 'IMG_7560', 'IMG_7571']
    },
    {
      date: 'September 29, 2026', title: 'A long walk under grey skies', tag: 'grey skies',
      text: 'Cloudy sky, empty road, your hand in mine. Wherever this road goes, I want to keep walking it with you.',
      cover: ['IMG_7612', 'IMG_7609', 'IMG_7643'],
      photos: ['IMG_7609', 'IMG_7612', 'IMG_7613', 'IMG_7643']
    },
    {
      date: 'October 7, 2026', title: 'Three days before ten months', tag: 'Oct 7 ♡',
      text: 'And here you are, more beautiful every month. Happy monthsary, Mahal.',
      cover: ['IMG_7672'],
      photos: ['IMG_7672']
    }
  ];

  // Videos (converted to .mp4 in assets/web/video; the original .mov is the fallback for iPhones)
  const VIDEOS = [
    { src: 'assets/web/video/v1.mp4', mov: 'assets/c60941c74d804ea3b2b839ffe3949fe3.mov', poster: 'assets/web/video/v1.jpg', label: 'our little montage', wide: false },
    { src: 'assets/web/video/v2.mp4', mov: 'assets/copy_16556BAB-E7EF-455E-B64F-70E0186F2317.mov', poster: 'assets/web/video/v2.jpg', label: 'I love you, always', wide: false },
    { src: 'assets/web/video/v3.mp4', mov: 'assets/copy_60DB7579-558E-4B62-A9D3-78BCE612EFA9.mov', poster: 'assets/web/video/v3.jpg', label: 'walking with you', wide: true }
  ];

  // Photos that fade behind the big "Mahal" title
  const HERO = ['IMG_6689', 'IMG_6711', 'IMG_7401', 'IMG_7612', 'IMG_7526', 'IMG_6540'];

  // =========================================================
  const thumb = n => `assets/web/thumb/${n}.jpg`;
  const full = n => `assets/web/full/${n}.jpg`;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = id => document.getElementById(id);
  const HEART = '<svg viewBox="0 0 64 58" aria-hidden="true"><path d="M32 56S2 37.5 2 18.5C2 8.8 9.6 2 18.6 2 25 2 29.6 5.6 32 10c2.4-4.4 7-8 13.4-8C54.4 2 62 8.8 62 18.5 62 37.5 32 56 32 56Z"/></svg>';

  // ---------- live counter ----------
  const pad = n => String(n).padStart(2, '0');
  function tick() {
    const ms = Math.max(0, Date.now() - START);
    $('cDays').textContent = Math.floor(ms / 864e5).toLocaleString();
    $('cHours').textContent = pad(Math.floor(ms / 36e5) % 24);
    $('cMins').textContent = pad(Math.floor(ms / 6e4) % 60);
    $('cSecs').textContent = pad(Math.floor(ms / 1e3) % 60);
  }
  tick(); setInterval(tick, 1000);

  // ---------- monthsary hearts ----------
  const now = new Date();
  const monthsTogether = (now.getFullYear() - START.getFullYear()) * 12 + now.getMonth() - START.getMonth() - (now.getDate() < START.getDate() ? 1 : 0);
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const shown = Math.max(10, monthsTogether);
  for (let i = 1; i <= shown; i++) {
    const d = new Date(START.getFullYear(), START.getMonth() + i, START.getDate());
    const li = document.createElement('li');
    if (i === shown) li.className = 'now'; // the newest monthsary glows (the 10th, until the 11th arrives)
    li.setAttribute('aria-label', `Monthsary ${i}, ${MONTHS[d.getMonth()]} ${d.getDate()}`);
    li.innerHTML = `<span class="h">${HEART}</span><span class="n">${i}</span>${MONTHS[d.getMonth()]} ${d.getDate()}`;
    $('months').appendChild(li);
  }

  // ---------- hero slideshow ----------
  const slides = $('slides');
  HERO.forEach((n, i) => {
    const img = new Image();
    img.alt = '';
    img.decoding = 'async';
    if (i < 2) img.src = full(n); else img.dataset.src = full(n);
    slides.appendChild(img);
  });
  let si = 0;
  const sImgs = [...slides.children];
  sImgs[0].classList.add('on');
  if (!reduce) {
    setInterval(() => {
      const next = (si + 1) % sImgs.length;
      const after = sImgs[(next + 1) % sImgs.length];
      if (after.dataset.src) { after.src = after.dataset.src; delete after.dataset.src; }
      sImgs[si].classList.remove('on');
      sImgs[next].classList.add('on');
      si = next;
    }, 6000);
  }

  // ---------- lightbox ----------
  let lbList = [], lbIdx = 0, lbOpener = null;
  const capOf = {};
  CHAPTERS.forEach(c => c.photos.forEach(p => { capOf[p] = c; }));
  const lb = $('lightbox'), lbImg = $('lbImg'), lbCap = $('lbCap');
  function lbShow() {
    const n = lbList[lbIdx], c = capOf[n];
    lbImg.src = full(n);
    lbImg.alt = c ? c.title : 'Photo of us';
    lbImg.style.animation = 'none'; void lbImg.offsetWidth; lbImg.style.animation = '';
    lbCap.innerHTML = c ? `${c.title}<small>${c.date} · ${lbIdx + 1} / ${lbList.length}</small>` : '';
    // preload neighbors
    [1, -1].forEach(k => { const m = lbList[(lbIdx + k + lbList.length) % lbList.length]; if (m) new Image().src = full(m); });
  }
  function lbOpen(list, idx, opener) {
    lbList = list; lbIdx = idx; lbOpener = opener;
    lb.hidden = false; document.body.style.overflow = 'hidden';
    lbShow(); $('lbClose').focus();
  }
  function lbClose() {
    lb.hidden = true; document.body.style.overflow = '';
    if (lbOpener) lbOpener.focus();
  }
  const lbStep = k => { lbIdx = (lbIdx + k + lbList.length) % lbList.length; lbShow(); };
  $('lbClose').onclick = lbClose;
  $('lbPrev').onclick = () => lbStep(-1);
  $('lbNext').onclick = () => lbStep(1);
  lb.addEventListener('click', e => { if (e.target === lb) lbClose(); });
  addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape') lbClose();
    if (e.key === 'ArrowRight') lbStep(1);
    if (e.key === 'ArrowLeft') lbStep(-1);
  });
  let tx = null;
  lb.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => {
    if (tx == null) return;
    const dx = e.changedTouches[0].clientX - tx; tx = null;
    if (Math.abs(dx) > 50) lbStep(dx < 0 ? 1 : -1);
  });

  // ---------- timeline ----------
  const tl = $('timeline');
  CHAPTERS.forEach(c => {
    const el = document.createElement('article');
    el.className = 'chapter reveal';
    const stack = c.cover.map((n, i) => {
      const cls = c.cover.length === 1 ? 'single' : 'p' + i;
      const cap = i === 0 ? `<span class="pc">${c.tag}</span>` : '';
      return `<button class="polaroid ${cls}" type="button" data-n="${n}" aria-label="Open photo: ${c.title}"><img src="${thumb(n)}" alt="" loading="lazy" decoding="async">${cap}</button>`;
    }).join('');
    const more = c.photos.length > c.cover.length
      ? `<button class="ch-more" type="button">See all ${c.photos.length} photos</button>` : '';
    el.innerHTML = `
      <div class="ch-text">
        <p class="ch-date">${c.date}</p>
        <h3 class="ch-title">${c.title}</h3>
        <p class="ch-body">${c.text}</p>
        ${more}
      </div>
      <div class="stack">${stack}</div>`;
    el.querySelectorAll('.polaroid').forEach(b => {
      b.onclick = () => lbOpen(c.photos, Math.max(0, c.photos.indexOf(b.dataset.n)), b);
    });
    const m = el.querySelector('.ch-more');
    if (m) m.onclick = () => lbOpen(c.photos, 0, m);
    tl.appendChild(el);
  });

  // ---------- gallery ----------
  const all = CHAPTERS.flatMap(c => c.photos);
  const gal = $('gallery');
  all.forEach((n, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', `Open photo ${i + 1} of ${all.length}`);
    const img = new Image();
    img.loading = 'lazy'; img.decoding = 'async'; img.alt = '';
    img.onload = () => img.classList.add('loaded');
    img.src = thumb(n);
    b.appendChild(img);
    b.onclick = () => lbOpen(all, i, b);
    gal.appendChild(b);
  });

  // ---------- videos ----------
  const vrow = $('videos');
  VIDEOS.forEach(v => {
    const card = document.createElement('div');
    card.className = 'vcard reveal' + (v.wide ? ' wide' : '');
    card.innerHTML = `
      <video playsinline preload="none" poster="${v.poster}">
        <source src="${v.src}" type="video/mp4">
        <source src="${v.mov}" type="video/quicktime">
      </video>
      <button class="vplay" type="button" aria-label="Play video: ${v.label}"><i>▶</i><b>${v.label}</b></button>`;
    const vid = card.querySelector('video');
    card.querySelector('.vplay').onclick = () => {
      document.querySelectorAll('.vcard video').forEach(o => { if (o !== vid) o.pause(); });
      vid.controls = true;
      vid.play();
    };
    vid.addEventListener('play', () => card.classList.add('playing'));
    vrow.appendChild(card);
  });

  // ---------- envelope ----------
  const env = $('envelope'), envBtn = $('envBtn');
  envBtn.onclick = () => {
    if (env.classList.contains('open')) return;
    env.classList.add('open');
    envBtn.setAttribute('aria-expanded', 'true');
    const r = envBtn.getBoundingClientRect();
    heartBurst(r.left + r.width / 2, r.top + r.height / 2, 28);
  };

  // ---------- scroll reveal ----------
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: .15, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // =========================================================
  //  floating hearts & petals (background canvas)
  // =========================================================
  const cv = $('sky'), ctx = cv.getContext('2d');
  let W, H, DPR;
  function resize() {
    DPR = Math.min(devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    cv.width = W * DPR; cv.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  resize();
  addEventListener('resize', resize);

  const COLS = ['#f38ba8', '#ffb3c6', '#ff8fab', '#ffd6e0', '#fb6f92', '#f6c98b'];
  const rnd = (a, b) => a + Math.random() * (b - a);
  const pick = a => a[(Math.random() * a.length) | 0];

  function heartPath(s) {
    ctx.beginPath();
    ctx.moveTo(0, s * .35);
    ctx.bezierCurveTo(-s * .9, -s * .25, -s * .45, -s * .95, 0, -s * .45);
    ctx.bezierCurveTo(s * .45, -s * .95, s * .9, -s * .25, 0, s * .35);
    ctx.closePath();
  }

  class Floater {
    constructor(x, y, burst) {
      this.heart = burst || Math.random() < .55;
      this.x = x ?? rnd(0, W);
      this.y = y ?? H + 20;
      const a = rnd(0, Math.PI * 2), sp = rnd(2, 7);
      this.vx = burst ? Math.cos(a) * sp : rnd(-.15, .15);
      this.vy = burst ? Math.sin(a) * sp - 2 : -rnd(.25, .7);
      this.s = burst ? rnd(8, 18) : rnd(5, 12);
      this.col = pick(COLS);
      this.rot = rnd(-.4, .4);
      this.ph = rnd(0, 6.28);
      this.alpha = burst ? 1 : rnd(.18, .45);
      this.burst = burst;
      this.life = burst ? rnd(1400, 2400) : Infinity;
      this.t = 0;
    }
    update(dt, t) {
      const k = dt / 16;
      this.t += dt;
      if (this.burst) {
        this.vx *= .96; this.vy = this.vy * .96 + .06 * k;
      }
      this.x += (this.vx + Math.sin(t * .0012 + this.ph) * .35) * k;
      this.y += this.vy * k;
      this.rot = Math.sin(t * .001 + this.ph) * .35;
    }
    get dead() { return this.t > this.life || this.y < -40 || this.y > H + 60; }
    draw() {
      const fade = this.burst ? Math.max(0, 1 - this.t / this.life) : 1;
      ctx.save();
      ctx.globalAlpha = this.alpha * fade;
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rot);
      ctx.fillStyle = this.col;
      if (this.heart) heartPath(this.s);
      else {
        ctx.beginPath();
        ctx.ellipse(0, 0, this.s * .45, this.s * .8, 0, 0, Math.PI * 2);
      }
      ctx.fill();
      ctx.restore();
    }
  }

  let floaters = [];
  for (let i = 0; i < 22; i++) { const f = new Floater(); f.y = rnd(0, H); floaters.push(f); }

  function heartBurst(x, y, n = 22) {
    if (reduce) return;
    for (let i = 0; i < n; i++) floaters.push(new Floater(x, y, true));
  }

  let last = performance.now();
  function frame(t) {
    const dt = Math.min(50, t - last); last = t;
    ctx.clearRect(0, 0, W, H);
    if (Math.random() < .05 && floaters.length < 60) floaters.push(new Floater());
    floaters = floaters.filter(f => !f.dead);
    for (const f of floaters) { f.update(dt, t); f.draw(); }
    requestAnimationFrame(frame);
  }
  if (!reduce) requestAnimationFrame(frame);

  // tap the finale or the burst button for hearts
  $('burstBtn').onclick = e => {
    const r = e.currentTarget.getBoundingClientRect();
    heartBurst(r.left + r.width / 2, r.top + r.height / 2, 40);
    for (let i = 0; i < 4; i++) setTimeout(() => heartBurst(rnd(W * .15, W * .85), rnd(H * .2, H * .7), 18), 200 + i * 220);
  };
  $('finale').addEventListener('pointerdown', e => {
    if (e.target.closest('button,a')) return;
    heartBurst(e.clientX, e.clientY, 18);
  });

  // ---------- gate ----------
  const gate = $('gate');
  $('openGate').onclick = e => {
    const r = e.currentTarget.getBoundingClientRect();
    heartBurst(r.left + r.width / 2, r.top + r.height / 2, 50);
    gate.classList.add('gone');
    document.body.classList.remove('locked');
    setTimeout(() => gate.remove(), 1200);
  };
})();
