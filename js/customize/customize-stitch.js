function selectStitch(color) {
  var img = document.querySelector(".customize-stitch");
  var newSrc = "";

  switch (color) {
    case "black":
      newSrc = "images/saddles/Loire/Stitching/Loire-Stitch-Black.png";
      break;
    case "chocolate":
      newSrc = "images/saddles/Loire/Stitching/Loire-Stitch-Chocolate.png";
      break;
    case "oak":
      newSrc = "images/saddles/Loire/Stitching/Loire-Stitch-Oak.png";
      break;
    case "tabacco":
      newSrc = "images/saddles/Loire/Stitching/Loire-Stitch-Tabacco.png";
      break;
    case "cognac":
      newSrc = "images/saddles/Loire/Stitching/Loire-Stitch-Cognac.png";
      break;
    default:
      break;
  }

  img.src = newSrc;

  const options = document.querySelectorAll(".radio-stitch");
  options.forEach((option) => {
    option.classList.remove("selected");
    const dotOverlay = option.querySelector(".dot-overlay-stitch");
    dotOverlay.style.display = "none";
    console.log(option);
  });

  const selectedOption = document.querySelector(
    `.radio-stitch[onclick*="${color}"]`
  );
  selectedOption.classList.add("selected");

  const dotOverlay = selectedOption.querySelector(".dot-overlay-stitch");
  dotOverlay.style.display = "block";
}
