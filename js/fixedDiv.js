window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var fixedDiv = document.getElementById("fixedDiv");
  var scrollableDiv = document.getElementById("scrollableDiv");
  var threshold = 200;
  var distanceFromBottom = 1300;

  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  if (window.pageYOffset > threshold) {
    if (windowWidth < 500) {
      fixedDiv.style.position = "fixed";
      fixedDiv.style.top = "0";
      fixedDiv.style.zIndex = "60";
      fixedDiv.style.margin = "auto";
      fixedDiv.style.backgroundColor = "black";
      fixedDiv.style.width = "100%";
      var distanceFromBottom = 1300;

      scrollableDiv.style.position = "relative";
      scrollableDiv.style.right = "0";
      scrollableDiv.style.top = "0";
    } else if (windowWidth < 767) {
      fixedDiv.style.position = "fixed";
      fixedDiv.style.top = "0";
      fixedDiv.style.zIndex = "60";
      fixedDiv.style.margin = "auto";
      fixedDiv.style.backgroundColor = "black";
      fixedDiv.style.width = "100%";

      scrollableDiv.style.position = "relative";
      scrollableDiv.style.right = "0";
      scrollableDiv.style.top = "0";
    } else {
      fixedDiv.style.position = "fixed";
      fixedDiv.style.left = "15px";
      fixedDiv.style.top = "50px";

      scrollableDiv.style.position = "absolute";
      scrollableDiv.style.right = "15px";
      scrollableDiv.style.top = 0;
    }

    var bottomLimit = windowHeight + distanceFromBottom;

    if (window.pageYOffset > bottomLimit) {
      if (windowWidth < 500) {
        fixedDiv.style.position = "absolute";
        fixedDiv.style.top = "1950px";
      } else {
        fixedDiv.style.position = "relative";
        fixedDiv.style.top = "1850px";
      }
    }
  } else {
    fixedDiv.style.position = "relative";
    scrollableDiv.style.position = "relative";
    fixedDiv.style.left = 0;
    scrollableDiv.style.right = 0;
    scrollableDiv.style.top = 0;
  }
}
