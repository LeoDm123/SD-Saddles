function selectStitch(color) {
  var img = document.querySelector(".customize-stitch");
  var newSrc = "";
  var currentPageName = getPageName();

  switch (color) {
    case `black`:
      newSrc = `images/saddles/${currentPageName}/Stitching/${currentPageName}-Stitching-Black.png`;
      break;
    case `chocolate`:
      newSrc = `images/saddles/${currentPageName}/Stitching/${currentPageName}-Stitching-Chocolate.png`;
      break;
    case `oak`:
      newSrc = `images/saddles/${currentPageName}/Stitching/${currentPageName}-Stitching-Oak.png`;
      break;
    case `tabacco`:
      newSrc = `images/saddles/${currentPageName}/Stitching/${currentPageName}-Stitching-Tabacco.png`;
      break;
    case `cognac`:
      newSrc = `images/saddles/${currentPageName}/Stitching/${currentPageName}-Stitching-Cognac.png`;
      break;
    case `white`:
      newSrc = `images/saddles/${currentPageName}/Stitching/${currentPageName}-Stitching-White.png`;
      break;
    case `natural`:
      newSrc = `images/saddles/${currentPageName}/Stitching/${currentPageName}-Stitching-Natural.png`;
      break;
    case `grey`:
      newSrc = `images/saddles/${currentPageName}/Stitching/${currentPageName}-Stitching-Grey.png`;
      break;
    case `red`:
      newSrc = `images/saddles/${currentPageName}/Stitching/${currentPageName}-Stitching-Red.png`;
      break;
    case `pink`:
      newSrc = `images/saddles/${currentPageName}/Stitching/${currentPageName}-Stitching-Pink.png`;
      break;
    case `yellow`:
      newSrc = `images/saddles/${currentPageName}/Stitching/${currentPageName}-Stitching-Yellow.png`;
      break;
    case `green`:
      newSrc = `images/saddles/${currentPageName}/Stitching/${currentPageName}-Stitching-Green.png`;
      break;
    case `blue`:
      newSrc = `images/saddles/${currentPageName}/Stitching/${currentPageName}-Stitching-Blue.png`;
      break;
    default:
      break;
  }

  img.src = newSrc;

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
