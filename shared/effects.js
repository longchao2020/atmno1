/**
 * ATMNO.1 Premium Visual Effects v1.0
 * Animated gradient borders · Mouse-follow glow · 3D tilt · Particles · Aurora
 */
;(function() {
  'use strict';

  var ready = new WeakSet();

  /* ========== Card Effects (gradient border + glow + tilt) ========== */

  function initCards() {
    document.querySelectorAll('.mc-pro').forEach(function(card) {
      if (ready.has(card)) return;
      ready.add(card);

      /* Remove entrance animation after it finishes so inline transform works */
      card.addEventListener('animationend', function handler(e) {
        if (e.animationName === 'mcProIn') {
          card.style.opacity = '1';
          card.style.animation = 'none';
          card.removeEventListener('animationend', handler);
        }
      });

      /* --- Animated gradient border rotation --- */
      var angle = 0, spinRaf = null;
      function spin() {
        angle = (angle + 1.2) % 360;
        card.style.setProperty('--gradient-angle', angle + 'deg');
        spinRaf = requestAnimationFrame(spin);
      }
      card.addEventListener('mouseenter', function() { if (!spinRaf) spin(); });
      card.addEventListener('mouseleave', function() {
        if (spinRaf) { cancelAnimationFrame(spinRaf); spinRaf = null; }
      });

      /* --- Mouse-follow glow + 3D tilt (combined for perf) --- */
      var tx = 0, ty = 0, cx = 0, cy = 0, tiltRaf = null;

      function lerpTilt() {
        cx += (tx - cx) * 0.08;
        cy += (ty - cy) * 0.08;
        card.style.transform =
          'perspective(600px) rotateX(' + cy.toFixed(2) + 'deg) rotateY(' + cx.toFixed(2) + 'deg) translateY(-6px) scale(1.02)';
        if (Math.abs(cx - tx) > 0.05 || Math.abs(cy - ty) > 0.05) {
          tiltRaf = requestAnimationFrame(lerpTilt);
        } else {
          tiltRaf = null;
        }
      }

      card.addEventListener('mousemove', function(e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width;
        var py = (e.clientY - r.top) / r.height;
        /* Glow position */
        card.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
        card.style.setProperty('--my', (py * 100).toFixed(1) + '%');
        /* Tilt targets */
        tx = (px - 0.5) * 8;
        ty = -(py - 0.5) * 8;
        if (!tiltRaf) tiltRaf = requestAnimationFrame(lerpTilt);
        /* Banner image parallax */
        var banner = card.querySelector('.mc-pro-banner');
        if (banner) banner.style.backgroundPosition = (50 + (px - 0.5) * 12).toFixed(1) + '% ' + (50 + (py - 0.5) * 12).toFixed(1) + '%';
      });

      card.addEventListener('mouseleave', function() {
        tx = 0; ty = 0;
        if (tiltRaf) { cancelAnimationFrame(tiltRaf); tiltRaf = null; }
        /* Reset banner parallax */
        var banner = card.querySelector('.mc-pro-banner');
        if (banner) banner.style.backgroundPosition = '';
        /* Smooth return to rest */
        (function resetTilt() {
          cx += (0 - cx) * 0.1;
          cy += (0 - cy) * 0.1;
          if (Math.abs(cx) > 0.05 || Math.abs(cy) > 0.05) {
            card.style.transform =
              'perspective(600px) rotateX(' + cy.toFixed(2) + 'deg) rotateY(' + cx.toFixed(2) + 'deg) translateY(0) scale(1)';
            requestAnimationFrame(resetTilt);
          } else {
            cx = 0; cy = 0;
            card.style.transform = '';
          }
        })();
      });
    });
  }

  /* ========== Floating Particle Background ========== */

  function initParticles() {
    if (document.getElementById('particleCanvas')) return;
    if (window.innerWidth < 768) return; /* Skip on mobile */

    var canvas = document.createElement('canvas');
    canvas.id = 'particleCanvas';
    document.body.prepend(canvas);

    var ctx = canvas.getContext('2d');
    var w, h;
    var colors = ['255,212,71', '38,208,124', '79,140,255', '255,91,122'];
    var particles = [];
    var N = 40;
    var MAX_D = 130;
    var MAX_D2 = MAX_D * MAX_D;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    resize();
    for (var i = 0; i < N; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        r: Math.random() * 1.5 + 0.5,
        a: Math.random() * 0.2 + 0.05,
        c: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      var isLight = document.documentElement.dataset.theme === 'light';
      var lc = isLight ? '0,0,0' : '255,255,255';
      var la = isLight ? 0.012 : 0.02;

      for (var i = 0; i < N; i++) {
        var p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 6.283);
        ctx.fillStyle = 'rgba(' + p.c + ',' + (isLight ? p.a * 0.5 : p.a) + ')';
        ctx.fill();
      }

      /* Connection lines */
      for (var i = 0; i < N; i++) {
        for (var j = i + 1; j < N; j++) {
          var dx = particles[i].x - particles[j].x;
          var dy = particles[i].y - particles[j].y;
          var d2 = dx * dx + dy * dy;
          if (d2 < MAX_D2) {
            var alpha = la * (1 - Math.sqrt(d2) / MAX_D);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = 'rgba(' + lc + ',' + alpha.toFixed(4) + ')';
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    }

    draw();
    window.addEventListener('resize', resize);
  }

  /* ========== Aurora Floating Orbs with Mouse Parallax ========== */

  function initAurora() {
    if (document.querySelector('.aurora-container')) return;

    var container = document.createElement('div');
    container.className = 'aurora-container';
    for (var i = 0; i < 3; i++) {
      var orb = document.createElement('div');
      orb.className = 'aurora-orb';
      container.appendChild(orb);
    }
    document.body.prepend(container);

    /* Subtle mouse parallax */
    document.addEventListener('mousemove', function(e) {
      var x = ((e.clientX / window.innerWidth) - 0.5) * 12;
      var y = ((e.clientY / window.innerHeight) - 0.5) * 12;
      container.style.transform = 'translate(' + x + 'px,' + y + 'px)';
    });
  }

  /* ========== Scroll Reveal (directional) ========== */

  function initScrollReveal() {
    if (!window.IntersectionObserver) return;

    /* 直接在 observer 回调里重置 inline styles，不依赖 scroll 事件 */
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'none';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px 0px 0px' });

    /* Cat hero: vertical reveal */
    document.querySelectorAll('.cat-hero').forEach(function(el) {
      if (!el.classList.contains('reveal-on-scroll')) {
        el.classList.add('reveal-on-scroll');
        observer.observe(el);
      }
    });

    /* Home sections: 轻微上移淡入（不再左右交替，避免初屏闪白） */
    document.querySelectorAll('.home-section').forEach(function(el, i) {
      if (el.classList.contains('reveal-dir')) return;
      el.classList.add('reveal-dir');
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity .55s cubic-bezier(.22,1,.36,1), transform .55s cubic-bezier(.22,1,.36,1)';
      el.style.transitionDelay = Math.min(i * 0.04, 0.2) + 's';
      observer.observe(el);
    });
  }

  /* ========== Featured Cards Mouse-follow Glow ========== */

  function initFeaturedGlow() {
    document.querySelectorAll('.home-featured-card, .mover-card, .pm-card, .pm-list-card').forEach(function(card) {
      if (ready.has(card)) return;
      ready.add(card);

      card.style.setProperty('--mx', '50%');
      card.style.setProperty('--my', '50%');

      card.addEventListener('mousemove', function(e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
        card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
      });
    });
  }

  /* ========== Magnetic Button Effect ========== */

  function initMagneticButtons() {
    document.querySelectorAll('.btn-primary, .btn-green, .cat-hero-soon').forEach(function(btn) {
      if (ready.has(btn)) return;
      ready.add(btn);

      btn.addEventListener('mousemove', function(e) {
        var r = btn.getBoundingClientRect();
        var x = e.clientX - r.left - r.width / 2;
        var y = e.clientY - r.top - r.height / 2;
        btn.style.transform = 'translate(' + (x * 0.15) + 'px,' + (y * 0.15) + 'px)';
      });

      btn.addEventListener('mouseleave', function() {
        btn.style.transform = '';
      });
    });
  }

  /* ========== Smooth Number Counter ========== */

  function initCounters() {
    if (!window.IntersectionObserver) return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var text = el.textContent;
          var match = text.match(/[\d,.]+/);
          if (!match) return;
          var target = parseFloat(match[0].replace(/,/g, ''));
          var suffix = text.replace(match[0], '');
          var prefix = text.substring(0, text.indexOf(match[0]));
          var start = performance.now();
          var duration = 1000;

          function update(now) {
            var progress = Math.min((now - start) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            var val = Math.round(target * eased);
            el.textContent = prefix + val.toLocaleString() + suffix;
            if (progress < 1) requestAnimationFrame(update);
          }
          requestAnimationFrame(update);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.ps-value, .mover-change').forEach(function(el) {
      observer.observe(el);
    });
  }

  /* ========== Ripple Click Effect ========== */

  function initRipple() {
    document.addEventListener('click', function(e) {
      var target = e.target.closest('.mc-pro, .btn, .btn-primary, .btn-green, .hn-item, .mover-card, .pm-card, .pm-list-card, .home-featured-card, .cat-entrance-card, .sub-nav-item');
      if (!target) return;
      if (!target.style.position || target.style.position === 'static') target.style.position = 'relative';
      var rect = target.getBoundingClientRect();
      var ripple = document.createElement('div');
      ripple.className = 'ripple-effect';
      var size = Math.max(rect.width, rect.height) * 2;
      ripple.style.cssText = 'width:' + size + 'px;height:' + size + 'px;left:' + (e.clientX - rect.left - size / 2) + 'px;top:' + (e.clientY - rect.top - size / 2) + 'px;';
      target.appendChild(ripple);
      ripple.addEventListener('animationend', function() { ripple.remove(); });
    });
  }

  /* ========== Scroll Progress Bar ========== */

  function initScrollProgress() {
    var bar = document.createElement('div');
    bar.className = 'scroll-progress';
    bar.style.transform = 'scaleX(0)';
    document.body.appendChild(bar);

    function update() {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var pct = h > 0 ? window.pageYOffset / h : 0;
      bar.style.transform = 'scaleX(' + pct.toFixed(4) + ')';
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* ========== Cursor Glow ========== */

  function initCursorGlow() {
    if (window.innerWidth < 768) return;
    var glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.style.opacity = '0';
    document.body.appendChild(glow);

    var visible = false, mx = 0, my = 0, cx = 0, cy = 0;
    var glowRaf = null;

    function lerpGlow() {
      cx += (mx - cx) * 0.12;
      cy += (my - cy) * 0.12;
      glow.style.left = cx.toFixed(1) + 'px';
      glow.style.top = cy.toFixed(1) + 'px';
      if (Math.abs(cx - mx) > 0.5 || Math.abs(cy - my) > 0.5) {
        glowRaf = requestAnimationFrame(lerpGlow);
      } else {
        glowRaf = null;
      }
    }

    document.addEventListener('mousemove', function(e) {
      mx = e.clientX; my = e.clientY;
      if (!visible) { visible = true; glow.style.opacity = '1'; cx = mx; cy = my; }
      if (!glowRaf) glowRaf = requestAnimationFrame(lerpGlow);
    });
    document.addEventListener('mouseleave', function() {
      visible = false; glow.style.opacity = '0';
    });
  }

  /* ========== Nav Indicator Slide ========== */

  function initNavIndicator() {
    var nav = document.querySelector('.header-nav');
    if (!nav) return;
    var indicator = document.createElement('div');
    indicator.className = 'nav-indicator';
    indicator.style.cssText = 'position:absolute;bottom:0;height:2px;border-radius:1px;pointer-events:none;background:linear-gradient(90deg,var(--accent),var(--accent-2));box-shadow:0 0 10px rgba(139,92,246,.4);transition:left .35s cubic-bezier(.22,1,.36,1),width .35s cubic-bezier(.22,1,.36,1),opacity .25s;';
    nav.style.position = 'relative';
    nav.appendChild(indicator);

    function moveTo(el) {
      if (!el) { indicator.style.opacity = '0'; return; }
      var nr = nav.getBoundingClientRect();
      var er = el.getBoundingClientRect();
      indicator.style.left = (er.left - nr.left) + 'px';
      indicator.style.width = er.width + 'px';
      indicator.style.opacity = '1';
    }

    function update() { moveTo(nav.querySelector('.hn-item.active')); }
    update();

    nav.querySelectorAll('.hn-item').forEach(function(item) {
      item.addEventListener('mouseenter', function() { moveTo(item); });
      item.addEventListener('mouseleave', update);
    });

    new MutationObserver(update).observe(nav, { subtree: true, attributes: true, attributeFilter: ['class'] });
  }

  /* ========== Page Transition Effect ========== */

  function initPageTransitions() {
    var overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay';
    document.body.appendChild(overlay);

    document.addEventListener('click', function(e) {
      var link = e.target.closest('a[href], .hn-item[onclick], .home-more[onclick]');
      if (!link) return;

      var href = link.getAttribute('href') || '';
      var onclick = link.getAttribute('onclick') || '';

      /* Only intercept internal navigations */
      if (href && !href.startsWith('#') && !href.startsWith('javascript') && href !== window.location.pathname) {
        e.preventDefault();
        overlay.classList.add('active');
        setTimeout(function() { window.location.href = href; }, 200);
      }
    });
  }

  /* ========== Parallax on Scroll for Featured Sections ========== */

  function initScrollParallax() {
    var els = document.querySelectorAll('.hf-bg, .cat-hero-bg, .pmf-bg');
    if (!els.length) return;

    var ticking = false;
    window.addEventListener('scroll', function() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function() {
        var scrollY = window.pageYOffset;
        els.forEach(function(bg) {
          var rect = bg.parentElement.getBoundingClientRect();
          if (rect.bottom > 0 && rect.top < window.innerHeight) {
            var pct = (rect.top + rect.height) / (window.innerHeight + rect.height);
            bg.style.transform = 'scale(1.08) translateY(' + ((pct - 0.5) * 20).toFixed(1) + 'px)';
          }
        });
        ticking = false;
      });
    }, { passive: true });
  }

  /* ========== Share Popup System ========== */

  var shareOverlay = null;

  function getShareLang() {
    try { var l = localStorage.getItem('atmno1_lang'); return l || 'zh-TW'; } catch(e) { return 'zh-TW'; }
  }

  var shareLangs = {
    'zh-TW': { title:'分享預測', desc:'ATMNO.1 · 全球首選的WEB3預測平台', twitter:'𝕏 推特分享', telegram:'✈️ Telegram', wechat:'💬 微信', copy:'📋 複製連結', copyBtn:'複製', copied:'已複製 ✓', copiedToast:'連結已複製到剪貼簿', wechatToast:'連結已複製，打開微信粘貼分享' },
    'zh-CN': { title:'分享预测', desc:'ATMNO.1 · 全球首选的WEB3预测平台', twitter:'𝕏 推特分享', telegram:'✈️ Telegram', wechat:'💬 微信', copy:'📋 复制链接', copyBtn:'复制', copied:'已复制 ✓', copiedToast:'链接已复制到剪贴板', wechatToast:'链接已复制，打开微信粘贴分享' },
    'en': { title:'Share prediction', desc:'ATMNO.1 · The world\'s premier Web3 prediction market', twitter:'𝕏 Twitter', telegram:'✈️ Telegram', wechat:'💬 WeChat', copy:'📋 Copy link', copyBtn:'Copy', copied:'Copied ✓', copiedToast:'Link copied to clipboard', wechatToast:'Link copied. Paste in WeChat to share' },
  };

  function sl(key) { var lang = getShareLang(); return (shareLangs[lang] || shareLangs['zh-CN'])[key] || key; }

  function createSharePopup() {
    if (shareOverlay) return;
    var ov = document.createElement('div');
    ov.className = 'share-popup-overlay';
    ov.innerHTML =
      '<div class="share-popup">' +
        '<button class="share-popup-close" onclick="window.closeSharePopup()">&times;</button>' +
        '<h3>' + sl('title') + '</h3>' +
        '<div class="share-preview">' +
          '<img id="shareImg" src="" alt="">' +
          '<div class="sp-text">' +
            '<div class="sp-title" id="shareTitle"></div>' +
            '<div class="sp-desc" id="shareDesc">' + sl('desc') + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="share-btns">' +
          '<button class="share-btn twitter" onclick="window.doShare(\'twitter\')">' + sl('twitter') + '</button>' +
          '<button class="share-btn telegram" onclick="window.doShare(\'telegram\')">' + sl('telegram') + '</button>' +
          '<button class="share-btn wechat" onclick="window.doShare(\'wechat\')">' + sl('wechat') + '</button>' +
          '<button class="share-btn copy" onclick="window.doShare(\'copy\')">' + sl('copy') + '</button>' +
        '</div>' +
        '<div class="share-link-bar">' +
          '<input type="text" id="shareLinkInput" readonly>' +
          '<button onclick="window.doShare(\'copy\')">' + sl('copyBtn') + '</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(ov);
    ov.addEventListener('click', function(e) { if (e.target === ov) window.closeSharePopup(); });
    shareOverlay = ov;
  }

  var shareData = { url: '', title: '' };

  window.openSharePopup = function(title, url, imgSrc) {
    createSharePopup();
    shareData.url = url || window.location.href;
    shareData.title = title || document.title;
    document.getElementById('shareTitle').textContent = shareData.title;
    document.getElementById('shareLinkInput').value = shareData.url;
    var img = document.getElementById('shareImg');
    if (imgSrc) { img.src = imgSrc; img.style.display = ''; }
    else { img.style.display = 'none'; }
    shareOverlay.classList.add('show');
  };

  window.closeSharePopup = function() {
    if (shareOverlay) shareOverlay.classList.remove('show');
  };

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && shareOverlay && shareOverlay.classList.contains('show')) {
      window.closeSharePopup();
    }
  });

  window.doShare = function(platform) {
    var url = shareData.url;
    var title = shareData.title + ' — ATMNO.1';
    if (platform === 'twitter') {
      window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(title) + '&url=' + encodeURIComponent(url), '_blank', 'width=600,height=400');
    } else if (platform === 'telegram') {
      window.open('https://t.me/share/url?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(title), '_blank', 'width=600,height=400');
    } else if (platform === 'wechat') {
      var inp = document.getElementById('shareLinkInput');
      if (inp) { inp.select(); }
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(function() {
          showShareToast(sl('wechatToast'));
        });
      } else {
        showShareToast(sl('wechatToast'));
      }
    } else {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(function() {
          var btn = shareOverlay.querySelector('.share-link-bar button');
          if (btn) { btn.textContent = sl('copied'); btn.classList.add('copied'); }
          setTimeout(function() { if (btn) { btn.textContent = sl('copyBtn'); btn.classList.remove('copied'); } }, 2000);
          showShareToast(sl('copiedToast'));
        });
      }
    }
  };

  function showShareToast(msg) {
    var t = document.querySelector('.toast');
    if (t && typeof window.toast === 'function') { window.toast(msg); return; }
    var el = document.createElement('div');
    el.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);padding:10px 20px;background:var(--accent);color:#000;border-radius:10px;font-size:13px;font-weight:700;z-index:99999;opacity:0;transition:all .3s;pointer-events:none;';
    el.textContent = msg;
    document.body.appendChild(el);
    requestAnimationFrame(function() { el.style.opacity = '1'; el.style.transform = 'translateX(-50%) translateY(0)'; });
    setTimeout(function() { el.style.opacity = '0'; el.style.transform = 'translateX(-50%) translateY(20px)'; setTimeout(function() { el.remove(); }, 300); }, 2500);
  }

  /* Add share buttons to mc-pro cards + featured cards + mover cards */
  function initShareButtons() {
    var selectors = '.mc-pro, .home-featured-card, .home-featured-main, .mover-card';
    document.querySelectorAll(selectors).forEach(function(card) {
      if (card.querySelector('.mc-pro-share')) return;
      var btn = document.createElement('button');
      btn.className = 'mc-pro-share';
      btn.innerHTML = '↗';
      btn.title = '分享';
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        /* Extract title */
        var titleEl = card.querySelector('.mc-pro-title, .mc-pro-vs-q, h3, .hfm-title, .hfc-title, .mover-name, .title');
        var title = titleEl ? titleEl.textContent.trim() : 'ATMNO.1';
        /* Extract image */
        var imgEl = card.querySelector('.mc-pro-banner, .hfm-bg, .hfc-bg, img');
        var imgSrc = '';
        if (imgEl && imgEl.tagName === 'IMG') imgSrc = imgEl.src;
        else if (imgEl) {
          var bg = window.getComputedStyle(imgEl).backgroundImage;
          var match = bg.match(/url\(["']?([^"')]+)/);
          if (match) imgSrc = match[1];
        }
        /* Build share URL — check onclick attribute, then a[href], then current page */
        var url = '';
        var onclickAttr = card.getAttribute('onclick') || '';
        var hrefMatch = onclickAttr.match(/location\.href\s*=\s*['"]([^'"]+)['"]/);
        if (hrefMatch) {
          url = window.location.origin + hrefMatch[1];
        } else {
          var link = card.closest('a[href]') || card.querySelector('a[href]');
          if (link) url = link.href || (window.location.origin + link.getAttribute('href'));
        }
        if (!url) url = window.location.href;
        window.openSharePopup(title, url, imgSrc);
      });
      card.style.position = 'relative';
      card.appendChild(btn);
    });
  }

  /* ========== Init ========== */

  function init() {
    /* Respect reduced motion preference */
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    initCards();
    initParticles();
    initAurora();
    initScrollReveal();
    initFeaturedGlow();
    initMagneticButtons();
    initCounters();
    initRipple();
    initScrollProgress();
    initCursorGlow();
    initNavIndicator();
    initPageTransitions();
    initScrollParallax();
    initShareButtons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    requestAnimationFrame(init);
  }

  /* Re-init cards when DOM changes (for dynamically rendered content) */
  var debounce;
  var mo = new MutationObserver(function() {
    clearTimeout(debounce);
    debounce = setTimeout(function() {
      initCards();
      initFeaturedGlow();
      initShareButtons();
    }, 150);
  });

  function startObserver() {
    mo.observe(document.body, { childList: true, subtree: true });
  }

  if (document.body) startObserver();
  else document.addEventListener('DOMContentLoaded', startObserver);

})();
