function selectPip(color) {
  var img = document.querySelector(".customize-pip");
  var newSrc = "";

  switch (color) {
    case "black":
      newSrc = "images/saddles/Loire/Piping/Loire-Piping-Black.png";
      break;
    case "chocolate":
      newSrc = "images/saddles/Loire/Piping/Loire-Piping-Chocolate.png";
      break;
    case "oak":
      newSrc = "images/saddles/Loire/Piping/Loire-Piping-Oak.png";
      break;
    case "tabacco":
      newSrc = "images/saddles/Loire/Piping/Loire-Piping-Tabacco.png";
      break;
    case "cognac":
      newSrc = "images/saddles/Loire/Piping/Loire-Piping-Cognac.png";
      break;
    case "white":
      newSrc = "images/saddles/Loire/Piping/Loire-Piping-White.png";
      break;
    case "natural":
      newSrc = "images/saddles/Loire/Piping/Loire-Piping-Natural.png";
      break;
    case "grey":
      newSrc = "images/saddles/Loire/Piping/Loire-Piping-Grey.png";
      break;
    case "red":
      newSrc = "images/saddles/Loire/Piping/Loire-Piping-Red.png";
      break;
    case "pink":
      newSrc = "images/saddles/Loire/Piping/Loire-Piping-Pink.png";
      break;
    case "yellow":
      newSrc = "images/saddles/Loire/Piping/Loire-Piping-Yellow.png";
      break;
    case "green":
      newSrc = "images/saddles/Loire/Piping/Loire-Piping-Green.png";
      break;
    case "blue":
      newSrc = "images/saddles/Loire/Piping/Loire-Piping-Blue.png";
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
