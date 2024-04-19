function selectKeeper(color) {
  var img = document.querySelector(".customize-keeper");
  var newSrc = "";

  switch (color) {
    case "black":
      newSrc = "images/saddles/Loire/Keeper/Loire-Keeper-Black.png";
      break;
    case "chocolate":
      newSrc = "images/saddles/Loire/Keeper/Loire-Keeper-Chocolate.png";
      break;
    case "oak":
      newSrc = "images/saddles/Loire/Keeper/Loire-Keeper-Oak.png";
      break;
    case "tabacco":
      newSrc = "images/saddles/Loire/Keeper/Loire-Keeper-Tabacco.png";
      break;
    case "cognac":
      newSrc = "images/saddles/Loire/Keeper/Loire-Keeper-Cognac.png";
      break;
    case "white":
      newSrc = "images/saddles/Loire/Keeper/Loire-Keeper-White.png";
      break;
    case "natural":
      newSrc = "images/saddles/Loire/Keeper/Loire-Keeper-Natural.png";
      break;
    case "grey":
      newSrc = "images/saddles/Loire/Keeper/Loire-Keeper-Grey.png";
      break;
    case "red":
      newSrc = "images/saddles/Loire/Keeper/Loire-Keeper-Red.png";
      break;
    case "pink":
      newSrc = "images/saddles/Loire/Keeper/Loire-Keeper-Pink.png";
      break;
    case "yellow":
      newSrc = "images/saddles/Loire/Keeper/Loire-Keeper-Yellow.png";
      break;
    case "green":
      newSrc = "images/saddles/Loire/Keeper/Loire-Keeper-Green.png";
      break;
    case "blue":
      newSrc = "images/saddles/Loire/Keeper/Loire-Keeper-Blue.png";
      break;
    default:
      break;
  }

  img.src = newSrc;

  const options = document.querySelectorAll(".radio-keeper");
  options.forEach((option) => {
    option.classList.remove("selected");
    const dotOverlay = option.querySelector(".dot-overlay-keeper");
    dotOverlay.style.display = "none";
  });

  const selectedOption = document.querySelector(
    `.radio-keeper[onclick*="${color}"]`
  );
  selectedOption.classList.add("selected");

  const dotOverlay = selectedOption.querySelector(".dot-overlay-keeper");
  dotOverlay.style.display = "block";
}
