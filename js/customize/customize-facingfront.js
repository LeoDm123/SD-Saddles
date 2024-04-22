function selectFacingFront(color) {
  var img = document.querySelector(".customize-facefront");
  var newSrc = "";

  switch (color) {
    case "black":
      newSrc = "images/saddles/Loire/FacingFront/Loire-FacingFront-Black.png";
      break;
    case "chocolate":
      newSrc =
        "images/saddles/Loire/FacingFront/Loire-FacingFront-Chocolate.png";
      break;
    case "oak":
      newSrc = "images/saddles/Loire/FacingFront/Loire-FacingFront-Oak.png";
      break;
    case "tabacco":
      newSrc = "images/saddles/Loire/FacingFront/Loire-FacingFront-Tabacco.png";
      break;
    case "cognac":
      newSrc = "images/saddles/Loire/FacingFront/Loire-FacingFront-Cognac.png";
      break;
    case "white":
      newSrc = "images/saddles/Loire/FacingFront/Loire-FacingFront-White.png";
      break;
    case "natural":
      newSrc = "images/saddles/Loire/FacingFront/Loire-FacingFront-Natural.png";
      break;
    case "grey":
      newSrc = "images/saddles/Loire/FacingFront/Loire-FacingFront-Grey.png";
      break;
    case "red":
      newSrc = "images/saddles/Loire/FacingFront/Loire-FacingFront-Red.png";
      break;
    case "pink":
      newSrc = "images/saddles/Loire/FacingFront/Loire-FacingFront-Pink.png";
      break;
    case "yellow":
      newSrc = "images/saddles/Loire/FacingFront/Loire-FacingFront-Yellow.png";
      break;
    case "green":
      newSrc = "images/saddles/Loire/FacingFront/Loire-FacingFront-Green.png";
      break;
    case "blue":
      newSrc = "images/saddles/Loire/FacingFront/Loire-FacingFront-Blue.png";
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
