(function () {
  "use strict";

  var REDIRECT_URL = "main.html";
  var SIZE_THRESHOLD = 160;
  var redirected = false;

  function redirect() {
    if (redirected) return;
    redirected = true;
    try {
      window.location.replace(REDIRECT_URL);
    } catch (e) {
      window.location.href = REDIRECT_URL;
    }
  }

  function isDevToolsOpen() {
    var widthGap = window.outerWidth - window.innerWidth > SIZE_THRESHOLD;
    var heightGap = window.outerHeight - window.innerHeight > SIZE_THRESHOLD;
    return widthGap || heightGap;
  }

  function check() {
    if (redirected) return;
    if (isDevToolsOpen()) {
      redirect();
    }
  }

  check();
  setInterval(check, 200);
  window.addEventListener("resize", check);
  window.addEventListener("focus", check);
  document.addEventListener("visibilitychange", check);
})();
