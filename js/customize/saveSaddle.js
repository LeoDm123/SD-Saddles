const requestButton = document.getElementById("requestButton");

requestButton.addEventListener("click", () => {
  const size = document.getElementById("size");
  const width = document.getElementById("width");
  const flaps = document.getElementById("flaps");
  const blockFront = document.getElementById("blockFront");
  const gulletSystem = document.getElementById("gulletSystem");
  const panels = document.getElementById("panels");
  const leatherType = document.getElementById("leatherType");
  const blockBack = document.getElementById("blockBack");
  const leatherColor = document.querySelector(".selected.radio-leather").dataset
    .color;
  const stitchColor = document.querySelector(".selected.radio-stitch").dataset
    .color;
  const pipColor = document.querySelector(".selected.radio-pip").dataset.color;
  const keeperColor = document.querySelector(".selected.radio-keeper").dataset
    .color;
  const facingFrontColor = document.querySelector(".selected.radio-facefront")
    .dataset.color;
  const facingBackColor = document.querySelector(".selected.radio-faceback")
    .dataset.color;

  const colors = {
    leather: leatherColor,
    stitch: stitchColor,
    pip: pipColor,
    keeper: keeperColor,
    facingFront: facingFrontColor,
    facingBack: facingBackColor,
  };

  if (
    !size.checkValidity() ||
    !width.checkValidity() ||
    !flaps.checkValidity() ||
    !blockFront.checkValidity() ||
    !gulletSystem.checkValidity() ||
    !panels.checkValidity() ||
    !leatherType.checkValidity() ||
    !blockBack.checkValidity()
  ) {
    Swal.fire({
      icon: "error",
      title: "Por favor, complete todos los campos",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }

  // Crear el objeto saddleData con los datos del formulario y los colores seleccionados
  const saddleData = {
    size: size.value,
    width: width.value,
    flaps: flaps.value,
    blockFront: blockFront.value,
    gulletSystem: gulletSystem.value,
    panels: panels.value,
    leatherType: leatherType.value,
    blockBack: blockBack.value,
    colors: colors,
  };

  let saddle = JSON.parse(localStorage.getItem("Saddle")) || [];

  saddle.push(saddleData);

  localStorage.setItem("Saddle", JSON.stringify(saddle));

  Swal.fire({
    icon: "success",
    title: "Saddle data saved successfully!",
    showConfirmButton: false,
    timer: 1500,
  });

  // Limpiar los campos del formulario
  size.value = "";
  width.value = "";
  flaps.value = "";
  blockFront.value = "";
  gulletSystem.value = "";
  panels.value = "";
  leatherType.value = "";
  blockBack.value = "";

  // Recargar la página después de un segundo
  setTimeout(() => {
    location.reload();
  }, 1000);
});
