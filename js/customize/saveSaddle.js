document.addEventListener("DOMContentLoaded", function () {
  var requestButton = document.getElementById("requestButton");

  requestButton.addEventListener("click", function (event) {
    event.preventDefault();

    localStorage.removeItem("Saddle");

    const saddleNameElement = document.getElementById("saddleName");
    const name = saddleNameElement.textContent.trim();
    const size = document.getElementById("size");
    const width = document.getElementById("width");
    const flaps = document.getElementById("flaps");
    const blockFront = document.getElementById("blockFront");
    const gulletSystem = document.getElementById("gulletSystem");
    const panels = document.getElementById("panels");
    const leatherType = document.getElementById("leatherType");
    const blockBack = document.getElementById("blockBack");

    const leatherColor = document.querySelector(".selected.radio-leather")
      .dataset.color;
    const stitchColor = document.querySelector(".selected.radio-stitch").dataset
      .color;
    const pipColor = document.querySelector(".selected.radio-pip").dataset
      .color;
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

    // Valores por defecto a validar
    const defaultValues = {
      size: "SIZE",
      width: "WIDTH",
      flaps: "FLAPS",
      blockFront: "BLOCK FRONT",
      gulletSystem: "UNIVERSAL GULLET SYSTEM",
      panels: "PANELS",
      leatherType: "TYPE OF LEATHER",
      blockBack: "BLOCK BACK",
    };

    // Validación de campos
    if (
      size.value === defaultValues.size ||
      width.value === defaultValues.width ||
      flaps.value === defaultValues.flaps ||
      blockFront.value === defaultValues.blockFront ||
      gulletSystem.value === defaultValues.gulletSystem ||
      panels.value === defaultValues.panels ||
      leatherType.value === defaultValues.leatherType ||
      blockBack.value === defaultValues.blockBack
    ) {
      Swal.fire({
        icon: "error",
        title: "Please, complete all required fields",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    const saddleData = {
      name: name,
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

    size.value = "";
    width.value = "";
    flaps.value = "";
    blockFront.value = "";
    gulletSystem.value = "";
    panels.value = "";
    leatherType.value = "";
    blockBack.value = "";

    localStorage.setItem("buttonClicked", "true");
    window.location.href = "/index.html#contact";
  });
});
