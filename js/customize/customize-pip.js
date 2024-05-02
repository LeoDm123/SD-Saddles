function selectPip(color) {
  var img = document.querySelector(".customize-pip");
  var newSrc = "";
  var currentPageName = getPageName();

  switch (color) {
    case `black`:
      newSrc = `images/saddles/${currentPageName}/Piping/${currentPageName}-Piping-Black.png`;
      break;
    case `chocolate`:
      newSrc = `images/saddles/${currentPageName}/Piping/${currentPageName}-Piping-Chocolate.png`;
      break;
    case `oak`:
      newSrc = `images/saddles/${currentPageName}/Piping/${currentPageName}-Piping-Oak.png`;
      break;
    case `tabacco`:
      newSrc = `images/saddles/${currentPageName}/Piping/${currentPageName}-Piping-Tabacco.png`;
      break;
    case `cognac`:
      newSrc = `images/saddles/${currentPageName}/Piping/${currentPageName}-Piping-Cognac.png`;
      break;
    case `white`:
      newSrc = `images/saddles/${currentPageName}/Piping/${currentPageName}-Piping-White.png`;
      break;
    case `natural`:
      newSrc = `images/saddles/${currentPageName}/Piping/${currentPageName}-Piping-Natural.png`;
      break;
    case `grey`:
      newSrc = `images/saddles/${currentPageName}/Piping/${currentPageName}-Piping-Grey.png`;
      break;
    case `red`:
      newSrc = `images/saddles/${currentPageName}/Piping/${currentPageName}-Piping-Red.png`;
      break;
    case `pink`:
      newSrc = `images/saddles/${currentPageName}/Piping/${currentPageName}-Piping-Pink.png`;
      break;
    case `yellow`:
      newSrc = `images/saddles/${currentPageName}/Piping/${currentPageName}-Piping-Yellow.png`;
      break;
    case `green`:
      newSrc = `images/saddles/${currentPageName}/Piping/${currentPageName}-Piping-Green.png`;
      break;
    case `blue`:
      newSrc = `images/saddles/${currentPageName}/Piping/${currentPageName}-Piping-Blue.png`;
      break;
    default:
      break;
  }

  img.src = newSrc;

  const options = document.querySelectorAll(".radio-pip");
  options.forEach((option) => {
    option.classList.remove("selected");
    const dotOverlay = option.querySelector(".dot-overlay-pip");
    dotOverlay.style.opacity = "0";
  });

  const selectedOption = document.querySelector(
    `.radio-pip[onclick*="${color}"]`
  );
  selectedOption.classList.add("selected");

  const dotOverlay = selectedOption.querySelector(".dot-overlay-pip");
  dotOverlay.style.opacity = "";
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
