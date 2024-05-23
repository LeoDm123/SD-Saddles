function selectLeather(color) {
  const options = document.querySelectorAll(".radio-leather");
  options.forEach((option) => {
    option.classList.remove("selected");
    const dotOverlay = option.querySelector(".dot-overlay-leather");
    dotOverlay.style.opacity = "0";
  });

  const selectedOption = document.querySelector(
    `.radio-leather[onclick*="${color}"]`
  );
  selectedOption.classList.add("selected");

  const dotOverlay = selectedOption.querySelector(".dot-overlay-leather");
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
