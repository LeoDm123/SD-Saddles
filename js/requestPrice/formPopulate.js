document.addEventListener("DOMContentLoaded", function () {
  // Check the flag in local storage
  var buttonClicked = localStorage.getItem("buttonClicked");

  if (buttonClicked) {
    var storedInfo = localStorage.getItem("Saddle");

    console.log("STORED", storedInfo);

    // Verifica si hay información en el almacenamiento local
    if (storedInfo) {
      var infoArray = JSON.parse(storedInfo);

      // Prepara el mensaje con la información
      var message =
        "\n" +
        "I am interested in the " +
        infoArray[0].name +
        " saddle with the following characteristics: " +
        "\n" +
        "Size: " +
        infoArray[0].size +
        "\n" +
        "Width: " +
        infoArray[0].width +
        "\n" +
        "Flaps: " +
        infoArray[0].flaps +
        "\n" +
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
        "  Keeper: " +
        infoArray[0].colors.keeper +
        "\n" +
        "  Piping: " +
        infoArray[0].colors.pip +
        "\n" +
        "  Facing Front: " +
        infoArray[0].colors.facingFront +
        "\n" +
        "  Facing Back: " +
        infoArray[0].colors.facingBack +
        "\n" +
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

      document.getElementById("txtmessage").value = message;
    }

    // Remove the flag from local storage
    localStorage.removeItem("buttonClicked");
  }
});
