document.addEventListener("DOMContentLoaded", function () {
  var requestButton = document.getElementById("accessorieRequestButton");

  requestButton.addEventListener("click", function (event) {
    event.preventDefault();

    localStorage.removeItem("Accessorie");

    const saddleNameElement = document.getElementById("accessorieName");
    const name = saddleNameElement.textContent.trim();
    const size = document.getElementById("size");

    const leatherColor = document.querySelector(".selected.radio-leather")
      .dataset.color;
    const stitchColor = document.querySelector(".selected.radio-stitch").dataset
      .color;

    const colors = {
      leather: leatherColor,
      stitch: stitchColor,
    };

    const defaultValues = {
      size: "SIZE",
    };

    if (size.value === defaultValues.size || !size.checkValidity()) {
      Swal.fire({
        icon: "error",
        title: "Please, complete all required fields",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    const AccessorieData = {
      name: name,
      size: size.value,
      colors: colors,
    };

    let accessorie = JSON.parse(localStorage.getItem("Accessorie")) || [];

    accessorie.push(AccessorieData);

    localStorage.setItem("Accessorie", JSON.stringify(accessorie));

    size.value = "";

    localStorage.setItem("accessorieButtonClicked", "true");

    window.location.href = "/index.html#contact";
  });
});
