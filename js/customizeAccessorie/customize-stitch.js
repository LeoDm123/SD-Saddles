function selectStitch(color) {
  const options = document.querySelectorAll(".radio-stitch");
  options.forEach((option) => {
    option.classList.remove("selected");
    const dotOverlay = option.querySelector(".dot-overlay-stitch");
    dotOverlay.style.opacity = "0";
  });

  const selectedOption = document.querySelector(
    `.radio-stitch[onclick*="${color}"]`
  );
  selectedOption.classList.add("selected");

  const dotOverlay = selectedOption.querySelector(".dot-overlay-stitch");
  dotOverlay.style.opacity = "1";
}

function getPageName() {
  var url = window.location.href;
  var pageName = url.split("/").pop().split(".")[0];
  console.log(pageName);
  if (pageName.startsWith("custom-")) {
    pageName = pageName.slice(7);
  }
  return pageName;
}
