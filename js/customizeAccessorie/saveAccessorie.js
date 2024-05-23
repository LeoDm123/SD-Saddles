const requestButton = document.getElementById("accessorieRequestButton");

requestButton.addEventListener("click", () => {
  localStorage.removeItem("Accessorie");

  const saddleNameElement = document.getElementById("accessorieName");
  const name = saddleNameElement.textContent.trim();
  const size = document.getElementById("size");

  const leatherColor = document.querySelector(".selected.radio-leather").dataset
    .color;
  const stitchColor = document.querySelector(".selected.radio-stitch").dataset
    .color;

  const colors = {
    leather: leatherColor,
    stitch: stitchColor,
  };

  if (!size.checkValidity()) {
    Swal.fire({
      icon: "error",
      title: "Por favor, complete todos los campos",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }

  // Crear el objeto saddleData con los datos del formulario y los colores seleccionados
  const AccessorieData = {
    name: name,
    size: size.value,
    colors: colors,
  };

  let accessorie = JSON.parse(localStorage.getItem("Accessorie")) || [];

  accessorie.push(AccessorieData);

  localStorage.setItem("Accessorie", JSON.stringify(accessorie));

  Swal.fire({
    icon: "success",
    title: "Saddle data saved successfully!",
    showConfirmButton: false,
    timer: 1500,
  });

  // Limpiar los campos del formulario
  name.value = "";
  size.value = "";

  // Recargar la página después de un segundo
  setTimeout(() => {
    location.reload();
  }, 1000);
});
