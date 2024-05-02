function selectKeeper(color) {
  var img = document.querySelector(".customize-keeper");
  var newSrc = "";
  var currentPageName = getPageName();

  switch (color) {
    case `black`:
      newSrc = `images/saddles/${currentPageName}/Keeper/${currentPageName}-Keeper-Black.png`;
      break;
    case `chocolate`:
      newSrc = `images/saddles/${currentPageName}/Keeper/${currentPageName}-Keeper-Chocolate.png`;
      break;
    case `oak`:
      newSrc = `images/saddles/${currentPageName}/Keeper/${currentPageName}-Keeper-Oak.png`;
      break;
    case `tabacco`:
      newSrc = `images/saddles/${currentPageName}/Keeper/${currentPageName}-Keeper-Tabacco.png`;
      break;
    case `cognac`:
      newSrc = `images/saddles/${currentPageName}/Keeper/${currentPageName}-Keeper-Cognac.png`;
      break;
    case `white`:
      newSrc = `images/saddles/${currentPageName}/Keeper/${currentPageName}-Keeper-White.png`;
      break;
    case `natural`:
      newSrc = `images/saddles/${currentPageName}/Keeper/${currentPageName}-Keeper-Natural.png`;
      break;
    case `grey`:
      newSrc = `images/saddles/${currentPageName}/Keeper/${currentPageName}-Keeper-Grey.png`;
      break;
    case `red`:
      newSrc = `images/saddles/${currentPageName}/Keeper/${currentPageName}-Keeper-Red.png`;
      break;
    case `pink`:
      newSrc = `images/saddles/${currentPageName}/Keeper/${currentPageName}-Keeper-Pink.png`;
      break;
    case `yellow`:
      newSrc = `images/saddles/${currentPageName}/Keeper/${currentPageName}-Keeper-Yellow.png`;
      break;
    case `green`:
      newSrc = `images/saddles/${currentPageName}/Keeper/${currentPageName}-Keeper-Green.png`;
      break;
    case `blue`:
      newSrc = `images/saddles/${currentPageName}/Keeper/${currentPageName}-Keeper-Blue.png`;
      break;
    default:
      break;
  }

  img.src = newSrc;

  const options = document.querySelectorAll(".radio-keeper");
  options.forEach((option) => {
    option.classList.remove("selected");
    const dotOverlay = option.querySelector(".dot-overlay-keeper");
    dotOverlay.style.opacity = "0";
  });

  const selectedOption = document.querySelector(
    `.radio-keeper[onclick*="${color}"]`
  );
  selectedOption.classList.add("selected");

  const dotOverlay = selectedOption.querySelector(".dot-overlay-keeper");
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
