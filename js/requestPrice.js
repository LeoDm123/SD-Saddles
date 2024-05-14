document.addEventListener("DOMContentLoaded", function () {
  var requestButton = document.getElementById("requestButton");

  requestButton.addEventListener("click", function (event) {
    event.preventDefault();

    var storedInfo = localStorage.getItem("Saddle");

    console.log("STORED", storedInfo);

    // Verifica si hay información en el almacenamiento local
    if (storedInfo) {
      var infoArray = JSON.parse(storedInfo);

      // Prepara el mensaje con la información
      var message =
        "Size: " +
        infoArray[0].size +
        "\n" +
        "Width: " +
        infoArray[0].width +
        "\n" +
        "Flaps: " +
        infoArray[0].flaps +
        "\n" +
        // Añade más campos según sea necesario
        "Block Front: " +
        infoArray[0].blockFront +
        "\n" +
        "Block Back: " +
        infoArray[0].blockBack +
        "\n" +
        "Colors:\n" +
        "  Leather: " +
        infoArray[0].colors.leather +
        "\n" +
        "  Stitch: " +
        infoArray[0].colors.stitch +
        "\n" +
        // Añade más campos según sea necesario
        "Gullet System: " +
        infoArray[0].gulletSystem +
        "\n" +
        "Leather Type: " +
        infoArray[0].leatherType +
        "\n" +
        "Panels: " +
        infoArray[0].panels +
        "\n";

      console.log("MESSAGE", message);

      // Inserta el mensaje en el textarea del formulario
      document.getElementById("cmessage").value = message;

      // Espera un corto tiempo antes de redirigir
      setTimeout(function () {
        // Redirige a /index.html#contact
        window.location.href = "/index.html#contact";
      }, 100);
    }
  });
});
