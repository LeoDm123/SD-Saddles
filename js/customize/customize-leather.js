function selectLeather(color) {
  var img = document.querySelector(".customize-leather");
  var newSrc = "";
  var currentPageName = getPageName();

  switch (color) {
    case `black`:
      newSrc = `images/saddles/${currentPageName}/${currentPageName}-Leather-Black.png`;
      break;
    case `chocolate`:
      newSrc = `images/saddles/${currentPageName}/${currentPageName}-Leather-Chocolate.png`;
      break;
    case `oak`:
      newSrc = `images/saddles/${currentPageName}/${currentPageName}-Leather-Oak.png`;
      break;
    case `tobacco`:
      newSrc = `images/saddles/${currentPageName}/${currentPageName}-Leather-Tobacco.png`;
      break;
    case `cognac`:
      newSrc = `images/saddles/${currentPageName}/${currentPageName}-Leather-Cognac.png`;
      break;
    default:
      break;
  }

  img.src = newSrc;

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
