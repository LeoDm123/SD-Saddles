function selectFacingFront(color) {
  var img = document.querySelector(".customize-facefront");
  var newSrc = "";
  var currentPageName = getPageName();

  switch (color) {
    case `black`:
      newSrc = `images/saddles/${currentPageName}/FacingFront/${currentPageName}-FacingFront-Black.png`;
      break;
    case `chocolate`:
      newSrc = `images/saddles/${currentPageName}/FacingFront/${currentPageName}-FacingFront-Chocolate.png`;
      break;
    case `oak`:
      newSrc = `images/saddles/${currentPageName}/FacingFront/${currentPageName}-FacingFront-Oak.png`;
      break;
    case `tabacco`:
      newSrc = `images/saddles/${currentPageName}/FacingFront/${currentPageName}-FacingFront-Tabacco.png`;
      break;
    case `cognac`:
      newSrc = `images/saddles/${currentPageName}/FacingFront/${currentPageName}-FacingFront-Cognac.png`;
      break;
    case `white`:
      newSrc = `images/saddles/${currentPageName}/FacingFront/${currentPageName}-FacingFront-White.png`;
      break;
    case `natural`:
      newSrc = `images/saddles/${currentPageName}/FacingFront/${currentPageName}-FacingFront-Natural.png`;
      break;
    case `grey`:
      newSrc = `images/saddles/${currentPageName}/FacingFront/${currentPageName}-FacingFront-Grey.png`;
      break;
    case `red`:
      newSrc = `images/saddles/${currentPageName}/FacingFront/${currentPageName}-FacingFront-Red.png`;
      break;
    case `pink`:
      newSrc = `images/saddles/${currentPageName}/FacingFront/${currentPageName}-FacingFront-Pink.png`;
      break;
    case `yellow`:
      newSrc = `images/saddles/${currentPageName}/FacingFront/${currentPageName}-FacingFront-Yellow.png`;
      break;
    case `green`:
      newSrc = `images/saddles/${currentPageName}/FacingFront/${currentPageName}-FacingFront-Green.png`;
      break;
    case `blue`:
      newSrc = `images/saddles/${currentPageName}/FacingFront/${currentPageName}-FacingFront-Blue.png`;
      break;
    default:
      break;
  }

  img.src = newSrc;

  const options = document.querySelectorAll(".radio-facefront");
  options.forEach((option) => {
    option.classList.remove("selected");
    const dotOverlay = option.querySelector(".dot-overlay-facefront");
    dotOverlay.style.opacity = "0";
  });

  const selectedOption = document.querySelector(
    `.radio-facefront[onclick*="${color}"]`
  );
  selectedOption.classList.add("selected");

  const dotOverlay = selectedOption.querySelector(".dot-overlay-facefront");
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
