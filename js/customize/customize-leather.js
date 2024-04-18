function selectLeather(color) {
  var img = document.querySelector(".customize-leather");
  var newSrc = "";

  switch (color) {
    case "black":
      newSrc = "images/saddles/Loire/Loire-Leather-Black.png";
      break;
    case "chocolate":
      newSrc = "images/saddles/Loire/Loire-Leather-Chocolate.png";
      break;
    case "oak":
      newSrc = "images/saddles/Loire/Loire-Leather-Oak.png";
      break;
    case "tabacco":
      newSrc = "images/saddles/Loire/Loire-Leather-Tabacco.png";
      break;
    case "cognac":
      newSrc = "images/saddles/Loire/Loire-Leather-Cognac.png";
      break;
    default:
      break;
  }

  img.src = newSrc;

  const options = document.querySelectorAll(".radio-leather");
  options.forEach((option) => {
    option.classList.remove("selected");
    const dotOverlay = option.querySelector(".dot-overlay-leather");
    dotOverlay.style.display = "none";
  });

  const selectedOption = document.querySelector(
    `.radio-leather[onclick*="${color}"]`
  );
  selectedOption.classList.add("selected");

  const dotOverlay = selectedOption.querySelector(".dot-overlay-leather");
  dotOverlay.style.display = "block";
  console.log(dotOverlay);
}
