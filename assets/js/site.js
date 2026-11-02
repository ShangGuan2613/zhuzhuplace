(function () {
  var root = document.documentElement;
  var themeBtn = document.getElementById("themeToggle");
  var sidebar = document.getElementById("sidebar");
  var overlay = document.getElementById("overlay");
  var menuBtn = document.getElementById("menuToggle");

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
    });
  }

  function setMenu(open) {
    if (!sidebar || !overlay) return;
    sidebar.classList.toggle("is-open", open);
    overlay.classList.toggle("is-visible", open);
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      setMenu(!sidebar.classList.contains("is-open"));
    });
  }
  if (overlay) {
    overlay.addEventListener("click", function () {
      setMenu(false);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });
})();
