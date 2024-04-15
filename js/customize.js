function selectOption(color) {
  var img = document.querySelector(".customize-img");
  var newSrc = "";

  switch (color) {
    case "black":
      newSrc = "images/saddles/Loire/Loire-Black.png";
      break;
    case "chocolate":
      newSrc = "images/saddles/Loire/Loire-Chocolate.png";
      break;
    case "oak":
      newSrc = "images/saddles/Loire/Loire-Oak.png";
      break;
    case "tabacco":
      newSrc = "images/saddles/Loire/Loire-Tabacco.png";
      break;
    case "cognac":
      newSrc = "images/saddles/Loire/Loire-Cognac.png";
      break;
    default:
      break;
  }

  img.src = newSrc;

  // Remove selected class from all options
  const options = document.querySelectorAll(".radio-option");
  options.forEach((option) => {
    option.classList.remove("selected");
    const dotOverlay = option.querySelector(".dot-overlay");
    dotOverlay.style.display = "none";
  });

  // Add selected class to the clicked option
  const selectedOption = document.querySelector(`[onclick*="${color}"]`);
  selectedOption.classList.add("selected");

  // Show dot-overlay for the selected option
  const dotOverlay = selectedOption.querySelector(".dot-overlay");
  dotOverlay.style.display = "block";
}
