function selectStitch(color) {
  var img = document.querySelector(".customize-stitch");
  var newSrc = "";

  switch (color) {
    case "black":
      newSrc = "images/saddles/Loire/Stitching/Loire-Stitching-Black.png";
      break;
    case "chocolate":
      newSrc = "images/saddles/Loire/Stitching/Loire-Stitching-Chocolate.png";
      break;
    case "oak":
      newSrc = "images/saddles/Loire/Stitching/Loire-Stitching-Oak.png";
      break;
    case "tabacco":
      newSrc = "images/saddles/Loire/Stitching/Loire-Stitching-Tabacco.png";
      break;
    case "cognac":
      newSrc = "images/saddles/Loire/Stitching/Loire-Stitching-Cognac.png";
      break;
    case "white":
      newSrc = "images/saddles/Loire/Stitching/Loire-Stitching-White.png";
      break;
    case "natural":
      newSrc = "images/saddles/Loire/Stitching/Loire-Stitching-Natural.png";
      break;
    case "grey":
      newSrc = "images/saddles/Loire/Stitching/Loire-Stitching-Grey.png";
      break;
    case "red":
      newSrc = "images/saddles/Loire/Stitching/Loire-Stitching-Red.png";
      break;
    case "pink":
      newSrc = "images/saddles/Loire/Stitching/Loire-Stitching-Pink.png";
      break;
    case "yellow":
      newSrc = "images/saddles/Loire/Stitching/Loire-Stitching-Yellow.png";
      break;
    case "green":
      newSrc = "images/saddles/Loire/Stitching/Loire-Stitching-Green.png";
      break;
    case "blue":
      newSrc = "images/saddles/Loire/Stitching/Loire-Stitching-Blue.png";
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
