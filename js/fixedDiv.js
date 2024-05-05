window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var fixedDiv = document.getElementById("fixedDiv");
  var scrollableDiv = document.getElementById("scrollableDiv");
  var threshold = 200;
  var distanceFromBottom = 1300;

  var windowHeight = window.innerHeight;

  if (window.pageYOffset > threshold) {
    fixedDiv.style.position = "fixed";
    fixedDiv.style.left = "15px";
    fixedDiv.style.top = "50px";

    scrollableDiv.style.position = "absolute";
    scrollableDiv.style.right = "15px";
    scrollableDiv.style.top = 0;

    var bottomLimit = windowHeight + distanceFromBottom;

    if (window.pageYOffset > bottomLimit) {
      fixedDiv.style.position = "relative";
      fixedDiv.style.top = "1850px";
    }
  } else {
    fixedDiv.style.position = "relative";
    scrollableDiv.style.position = "relative";
    fixedDiv.style.left = 0;
    scrollableDiv.style.right = 0;
  }
}
