(function () {
  var root = document.documentElement;
  var themeBtn = document.getElementById("themeToggle");
  if (!themeBtn) return;

  themeBtn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  });
})();
