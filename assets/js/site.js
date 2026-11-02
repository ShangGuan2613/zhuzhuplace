(function () {
  var root = document.documentElement;

  /* theme toggle */
  var themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  /* mobile sidebar */
  var sidebar = document.getElementById('sidebar');
  var overlay = document.getElementById('overlay');
  var menuBtn = document.getElementById('menuToggle');

  function setMenu(open) {
    if (!sidebar || !overlay) return;
    sidebar.classList.toggle('is-open', open);
    overlay.classList.toggle('is-visible', open);
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      setMenu(!sidebar.classList.contains('is-open'));
    });
  }
  if (overlay) {
    overlay.addEventListener('click', function () { setMenu(false); });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });

  /* home card filter */
  var filter = document.getElementById('cardFilter');
  if (filter) {
    var cards = Array.prototype.slice.call(
      document.querySelectorAll('#cardGrid .card')
    );
    filter.addEventListener('input', function () {
      var q = filter.value.trim().toLowerCase();
      cards.forEach(function (card) {
        var title = card.getAttribute('data-title') || '';
        var desc = (card.querySelector('.card-desc') || {}).textContent || '';
        var hit = !q || title.indexOf(q) > -1 || desc.toLowerCase().indexOf(q) > -1;
        card.classList.toggle('is-hidden', !hit);
      });
    });
  }
})();
