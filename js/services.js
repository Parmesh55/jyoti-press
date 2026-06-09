/* ============================================================
   JYOTI PRESS — services.js
   ============================================================ */

(function () {
  'use strict';

  /* ── Hamburger / Mobile Nav ── */
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobileNav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      var spans = hamburger.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
        spans[1].style.opacity  = '0';
        spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity  = '';
        spans[2].style.transform = '';
      }
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        var spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity  = '';
        spans[2].style.transform = '';
      });
    });
  }

  /* ── Navbar scroll shadow ── */
  var navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (navbar) {
      navbar.style.boxShadow = window.pageYOffset > 10
        ? '0 4px 24px rgba(0,0,0,0.12)'
        : '0 2px 8px rgba(0,0,0,0.08)';
    }
  }, { passive: true });

  /* ── Category bar drag scroll ── */
  var catTrack = document.getElementById('catTrack');
  if (catTrack) {
    var isDragging  = false;
    var startX      = 0;
    var scrollLeft0 = 0;

    catTrack.addEventListener('mousedown', function (e) {
      isDragging  = true;
      startX      = e.pageX - catTrack.offsetLeft;
      scrollLeft0 = catTrack.scrollLeft;
      catTrack.style.cursor = 'grabbing';
    });
    catTrack.addEventListener('mouseleave', function () {
      isDragging = false;
      catTrack.style.cursor = '';
    });
    catTrack.addEventListener('mouseup', function () {
      isDragging = false;
      catTrack.style.cursor = '';
    });
    catTrack.addEventListener('mousemove', function (e) {
      if (!isDragging) return;
      e.preventDefault();
      var x    = e.pageX - catTrack.offsetLeft;
      var walk = (x - startX) * 1.2;
      catTrack.scrollLeft = scrollLeft0 - walk;
    });

    var touchStartX = 0;
    var touchStartY = 0;

    catTrack.addEventListener('touchstart', function (e) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    catTrack.addEventListener('touchmove', function (e) {
      var dx = Math.abs(e.touches[0].clientX - touchStartX);
      var dy = Math.abs(e.touches[0].clientY - touchStartY);
      if (dx > dy) { e.stopPropagation(); }
    }, { passive: false });
  }

  /* ── Active category scroll helper ──────────────────────────
     Centers the active .cat-item inside #catTrack with smooth
     scrolling. Falls back to ensuring full visibility when
     centering is not possible (item near start or end of list).
  ──────────────────────────────────────────────────────────── */
  function scrollActiveCatIntoView(btn, instant) {
    var track = document.getElementById('catTrack');
    if (!track || !btn) return;

    var trackW       = track.offsetWidth;
    var btnLeft      = btn.offsetLeft;
    var btnW         = btn.offsetWidth;
    var idealScroll  = btnLeft - (trackW / 2) + (btnW / 2);
    var maxScroll    = track.scrollWidth - trackW;
    var targetScroll = Math.max(0, Math.min(idealScroll, maxScroll));

    if (instant) {
      track.scrollLeft = targetScroll;
    } else {
      track.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  }

  /* ── On page load: instantly center the already-active item ── */
  var catItems = document.querySelectorAll('.cat-item');

  window.addEventListener('load', function () {
    var activeBtn = document.querySelector('.cat-item.active');
    if (activeBtn) {
      scrollActiveCatIntoView(activeBtn, true);
    }
  });

  /* ── services.html switching logic ── */
  var offsetSection  = document.getElementById('offset-printing');
  var isServicesPage = !!offsetSection;

  if (isServicesPage) {
    catItems.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-target');

        if (target === 'digital-printing')                              { window.location.href = 'digitalPrinting.html';   return; }
        if (target === 'screen-printing')                               { window.location.href = 'ScreenPrinting.html';    return; }
        if (target === 'flex-printing')                                 { window.location.href = 'FlexPrinting.html';      return; }
        if (target === 'hoarding' || target === 'hoarding-section')     { window.location.href = 'Hoarding.html';          return; }
        if (target === 'outdoor-advertising')                           { window.location.href = 'outdoorAdvertising.html'; return; }
        if (target === 'wall-wrap')                                     { window.location.href = 'wallWrap.html';           return; }
        if (target === 'wall-painting')                                 { window.location.href = 'wallPainting.html';       return; }
        if (target === 'events')                                        { window.location.href = 'event.html';              return; }

        /* Offset Printing (self) */
        catItems.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        scrollActiveCatIntoView(btn);
        if (offsetSection) { offsetSection.style.display = ''; }
      });
    });

    /* Ensure offset active by default */
    var defaultBtn = document.querySelector('.cat-item[data-target="offset-printing"]');
    if (defaultBtn) {
      catItems.forEach(function (b) { b.classList.remove('active'); });
      defaultBtn.classList.add('active');
    }
  }

  /* ── digitalPrinting.html cat bar ── */
  var digitalSection = document.getElementById('digital-section');
  var isDigitalPage  = !!digitalSection;

  if (isDigitalPage) {
    catItems.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-target');

        if (target === 'offset-section')                                { window.location.href = 'services.html';          return; }
        if (target === 'screen-printing' || target === 'screen-section'){ window.location.href = 'ScreenPrinting.html';    return; }
        if (target === 'flex-printing'   || target === 'flex-section')  { window.location.href = 'FlexPrinting.html';      return; }
        if (target === 'hoarding' || target === 'hoarding-section')     { window.location.href = 'Hoarding.html';          return; }
        if (target === 'outdoor-advertising')                           { window.location.href = 'outdoorAdvertising.html'; return; }
        if (target === 'wall-wrap')                                     { window.location.href = 'wallWrap.html';           return; }
        if (target === 'wall-painting')                                 { window.location.href = 'wallPainting.html';       return; }
        if (target === 'events')                                        { window.location.href = 'event.html';              return; }

        /* Digital Printing (self) */
        catItems.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        scrollActiveCatIntoView(btn);
      });
    });
  }

  /* ── ScreenPrinting.html cat bar ── */
  var screenSection = document.getElementById('screen-section');
  var isScreenPage  = !!screenSection;

  if (isScreenPage) {
    catItems.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-target');

        if (target === 'offset-section')                                { window.location.href = 'services.html';          return; }
        if (target === 'digital-section')                               { window.location.href = 'digitalPrinting.html';   return; }
        if (target === 'flex-printing'   || target === 'flex-section')  { window.location.href = 'FlexPrinting.html';      return; }
        if (target === 'hoarding' || target === 'hoarding-section')     { window.location.href = 'Hoarding.html';          return; }
        if (target === 'outdoor-advertising')                           { window.location.href = 'outdoorAdvertising.html'; return; }
        if (target === 'wall-wrap')                                     { window.location.href = 'wallWrap.html';           return; }
        if (target === 'wall-painting')                                 { window.location.href = 'wallPainting.html';       return; }
        if (target === 'events')                                        { window.location.href = 'event.html';              return; }

        /* Screen Printing (self) */
        catItems.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        scrollActiveCatIntoView(btn);
      });
    });
  }

  /* ── FlexPrinting.html cat bar ── */
  var flexSection = document.getElementById('flex-section');
  var isFlexPage  = !!flexSection;

  if (isFlexPage) {
    catItems.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-target');

        if (target === 'offset-section')                                { window.location.href = 'services.html';          return; }
        if (target === 'digital-section')                               { window.location.href = 'digitalPrinting.html';   return; }
        if (target === 'screen-section')                                { window.location.href = 'ScreenPrinting.html';    return; }
        if (target === 'hoarding' || target === 'hoarding-section')     { window.location.href = 'Hoarding.html';          return; }
        if (target === 'outdoor-advertising')                           { window.location.href = 'outdoorAdvertising.html'; return; }
        if (target === 'wall-wrap')                                     { window.location.href = 'wallWrap.html';           return; }
        if (target === 'wall-painting')                                 { window.location.href = 'wallPainting.html';       return; }
        if (target === 'events')                                        { window.location.href = 'event.html';              return; }

        /* Flex Printing (self) */
        catItems.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        scrollActiveCatIntoView(btn);
      });
    });
  }

  /* ── Hoarding.html cat bar ── */
  var hoardingSection = document.getElementById('hoarding-section');
  var isHoardingPage  = !!hoardingSection;

  if (isHoardingPage) {
    catItems.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-target');

        if (target === 'offset-section')                                { window.location.href = 'services.html';          return; }
        if (target === 'digital-section')                               { window.location.href = 'digitalPrinting.html';   return; }
        if (target === 'screen-section')                                { window.location.href = 'ScreenPrinting.html';    return; }
        if (target === 'flex-section')                                  { window.location.href = 'FlexPrinting.html';      return; }
        if (target === 'outdoor-advertising')                           { window.location.href = 'outdoorAdvertising.html'; return; }
        if (target === 'wall-wrap')                                     { window.location.href = 'wallWrap.html';           return; }
        if (target === 'wall-painting')                                 { window.location.href = 'wallPainting.html';       return; }
        if (target === 'events')                                        { window.location.href = 'event.html';              return; }

        /* Hoarding (self) */
        catItems.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        scrollActiveCatIntoView(btn);
      });
    });
  }

  /* ── outdoorAdvertising.html cat bar ── */
  var outdoorSection = document.getElementById('outdoor-advertising');
  var isOutdoorPage  = !!outdoorSection;

  if (isOutdoorPage) {
    catItems.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-target');

        if (target === 'offset-section')                                    { window.location.href = 'services.html';          return; }
        if (target === 'digital-section')                                   { window.location.href = 'digitalPrinting.html';   return; }
        if (target === 'screen-section')                                    { window.location.href = 'ScreenPrinting.html';    return; }
        if (target === 'flex-section')                                      { window.location.href = 'FlexPrinting.html';      return; }
        if (target === 'hoarding-section' || target === 'hoarding')         { window.location.href = 'Hoarding.html';          return; }
        if (target === 'wall-wrap')                                         { window.location.href = 'wallWrap.html';           return; }
        if (target === 'wall-painting')                                     { window.location.href = 'wallPainting.html';       return; }
        if (target === 'events')                                            { window.location.href = 'event.html';              return; }

        /* Outdoor Advertising (self) */
        catItems.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        scrollActiveCatIntoView(btn);
      });
    });
  }

  /* ── wallWrap.html cat bar ── */
  var wallWrapSection = document.getElementById('wall-wrap-section');
  var isWallWrapPage  = !!wallWrapSection;

  if (isWallWrapPage) {
    catItems.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-target');

        if (target === 'offset-section')                                    { window.location.href = 'services.html';          return; }
        if (target === 'digital-section')                                   { window.location.href = 'digitalPrinting.html';   return; }
        if (target === 'screen-section')                                    { window.location.href = 'ScreenPrinting.html';    return; }
        if (target === 'flex-section')                                      { window.location.href = 'FlexPrinting.html';      return; }
        if (target === 'hoarding-section' || target === 'hoarding')         { window.location.href = 'Hoarding.html';          return; }
        if (target === 'outdoor-advertising')                               { window.location.href = 'outdoorAdvertising.html'; return; }
        if (target === 'wall-painting')                                     { window.location.href = 'wallPainting.html';       return; }
        if (target === 'events')                                            { window.location.href = 'event.html';              return; }

        /* Wall Wrap (self) */
        catItems.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        scrollActiveCatIntoView(btn);
      });
    });
  }

  /* ── wallPainting.html cat bar ── */
  var wallPaintingSection = document.getElementById('wall-painting-section');
  var isWallPaintingPage  = !!wallPaintingSection;

  if (isWallPaintingPage) {
    catItems.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-target');

        if (target === 'offset-section')                                    { window.location.href = 'services.html';          return; }
        if (target === 'digital-section')                                   { window.location.href = 'digitalPrinting.html';   return; }
        if (target === 'screen-section')                                    { window.location.href = 'ScreenPrinting.html';    return; }
        if (target === 'flex-section')                                      { window.location.href = 'FlexPrinting.html';      return; }
        if (target === 'hoarding-section' || target === 'hoarding')         { window.location.href = 'Hoarding.html';          return; }
        if (target === 'outdoor-advertising')                               { window.location.href = 'outdoorAdvertising.html'; return; }
        if (target === 'wall-wrap')                                         { window.location.href = 'wallWrap.html';           return; }
        if (target === 'events')                                            { window.location.href = 'event.html';              return; }

        /* Wall Painting (self) */
        catItems.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        scrollActiveCatIntoView(btn);
      });
    });
  }

  /* ── event.html cat bar ── */
  var eventsSection = document.getElementById('events-section');
  var isEventsPage  = !!eventsSection;

  if (isEventsPage) {
    catItems.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-target');

        if (target === 'offset-section')                                    { window.location.href = 'services.html';          return; }
        if (target === 'digital-section')                                   { window.location.href = 'digitalPrinting.html';   return; }
        if (target === 'screen-section')                                    { window.location.href = 'ScreenPrinting.html';    return; }
        if (target === 'flex-section')                                      { window.location.href = 'FlexPrinting.html';      return; }
        if (target === 'hoarding-section' || target === 'hoarding')         { window.location.href = 'Hoarding.html';          return; }
        if (target === 'outdoor-advertising')                               { window.location.href = 'outdoorAdvertising.html'; return; }
        if (target === 'wall-wrap')                                         { window.location.href = 'wallWrap.html';           return; }
        if (target === 'wall-painting')                                     { window.location.href = 'wallPainting.html';       return; }

        /* Events (self) */
        catItems.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        scrollActiveCatIntoView(btn);
      });
    });
  }

})();