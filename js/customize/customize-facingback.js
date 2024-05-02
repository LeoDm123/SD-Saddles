function selectFacingBack(color) {
  var img = document.querySelector(".customize-faceback");
  var newSrc = "";
  var currentPageName = getPageName();

  switch (color) {
    case `black`:
      newSrc = `images/saddles/${currentPageName}/FacingBack/${currentPageName}-FacingBack-Black.png`;
      break;
    case `chocolate`:
      newSrc = `images/saddles/${currentPageName}/FacingBack/${currentPageName}-FacingBack-Chocolate.png`;
      break;
    case `oak`:
      newSrc = `images/saddles/${currentPageName}/FacingBack/${currentPageName}-FacingBack-Oak.png`;
      break;
    case `tabacco`:
      newSrc = `images/saddles/${currentPageName}/FacingBack/${currentPageName}-FacingBack-Tabacco.png`;
      break;
    case `cognac`:
      newSrc = `images/saddles/${currentPageName}/FacingBack/${currentPageName}-FacingBack-Cognac.png`;
      break;
    case `white`:
      newSrc = `images/saddles/${currentPageName}/FacingBack/${currentPageName}-FacingBack-White.png`;
      break;
    case `natural`:
      newSrc = `images/saddles/${currentPageName}/FacingBack/${currentPageName}-FacingBack-Natural.png`;
      break;
    case `grey`:
      newSrc = `images/saddles/${currentPageName}/FacingBack/${currentPageName}-FacingBack-Grey.png`;
      break;
    case `red`:
      newSrc = `images/saddles/${currentPageName}/FacingBack/${currentPageName}-FacingBack-Red.png`;
      break;
    case `pink`:
      newSrc = `images/saddles/${currentPageName}/FacingBack/${currentPageName}-FacingBack-Pink.png`;
      break;
    case `yellow`:
      newSrc = `images/saddles/${currentPageName}/FacingBack/${currentPageName}-FacingBack-Yellow.png`;
      break;
    case `green`:
      newSrc = `images/saddles/${currentPageName}/FacingBack/${currentPageName}-FacingBack-Green.png`;
      break;
    case `blue`:
      newSrc = `images/saddles/${currentPageName}/FacingBack/${currentPageName}-FacingBack-Blue.png`;
      break;
    default:
      break;
  }

  img.src = newSrc;

  const options = document.querySelectorAll(".radio-faceback");
  options.forEach((option) => {
    option.classList.remove("selected");
    const dotOverlay = option.querySelector(".dot-overlay-faceback");
    dotOverlay.style.opacity = "0";
  });

  const selectedOption = document.querySelector(
    `.radio-faceback[onclick*="${color}"]`
  );
  selectedOption.classList.add("selected");

  const dotOverlay = selectedOption.querySelector(".dot-overlay-faceback");
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
