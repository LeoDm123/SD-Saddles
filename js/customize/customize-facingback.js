function selectFacingBack(color) {
  var img = document.querySelector(".customize-faceback");
  var newSrc = "";

  switch (color) {
    case "black":
      newSrc = "images/saddles/Loire/FacingBack/Loire-FacingBack-Black.png";
      break;
    case "chocolate":
      newSrc = "images/saddles/Loire/FacingBack/Loire-FacingBack-Chocolate.png";
      break;
    case "oak":
      newSrc = "images/saddles/Loire/FacingBack/Loire-FacingBack-Oak.png";
      break;
    case "tabacco":
      newSrc = "images/saddles/Loire/FacingBack/Loire-FacingBack-Tabacco.png";
      break;
    case "cognac":
      newSrc = "images/saddles/Loire/FacingBack/Loire-FacingBack-Cognac.png";
      break;
    case "white":
      newSrc = "images/saddles/Loire/FacingBack/Loire-FacingBack-White.png";
      break;
    case "natural":
      newSrc = "images/saddles/Loire/FacingBack/Loire-FacingBack-Natural.png";
      break;
    case "grey":
      newSrc = "images/saddles/Loire/FacingBack/Loire-FacingBack-Grey.png";
      break;
    case "red":
      newSrc = "images/saddles/Loire/FacingBack/Loire-FacingBack-Red.png";
      break;
    case "pink":
      newSrc = "images/saddles/Loire/FacingBack/Loire-FacingBack-Pink.png";
      break;
    case "yellow":
      newSrc = "images/saddles/Loire/FacingBack/Loire-FacingBack-Yellow.png";
      break;
    case "green":
      newSrc = "images/saddles/Loire/FacingBack/Loire-FacingBack-Green.png";
      break;
    case "blue":
      newSrc = "images/saddles/Loire/FacingBack/Loire-FacingBack-Blue.png";
      break;
    default:
      break;
  }

  img.src = newSrc;

  const options = document.querySelectorAll(".radio-faceback");
  options.forEach((option) => {
    option.classList.remove("selected");
    const dotOverlay = option.querySelector(".dot-overlay-faceback");
    dotOverlay.style.display = "none";
  });

  const selectedOption = document.querySelector(
    `.radio-faceback[onclick*="${color}"]`
  );
  selectedOption.classList.add("selected");

  const dotOverlay = selectedOption.querySelector(".dot-overlay-faceback");
  dotOverlay.style.display = "block";
}
