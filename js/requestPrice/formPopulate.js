document.addEventListener("DOMContentLoaded", function () {
  var buttonClicked = localStorage.getItem("buttonClicked");
  var accessorieButtonClicked = localStorage.getItem("accessorieButtonClicked");

  if (buttonClicked) {
    var storedInfo = localStorage.getItem("Saddle");

    if (storedInfo) {
      var infoArray = JSON.parse(storedInfo);

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

      document.getElementById("message").value = message;
    }

    localStorage.removeItem("buttonClicked");
  } else if (accessorieButtonClicked) {
    var storedInfo = localStorage.getItem("Accessorie");

    if (storedInfo) {
      var infoArray = JSON.parse(storedInfo);

      var message =
        "\n" +
        "I am interested in the " +
        infoArray[0].name +
        " accessorie with the following characteristics: " +
        "\n" +
        "Size: " +
        infoArray[0].size +
        "\n" +
        "Width: " +
        "Colors:\n" +
        "  Leather: " +
        infoArray[0].colors.leather +
        "\n" +
        "  Stitch: " +
        infoArray[0].colors.stitch +
        "\n";

      document.getElementById("message").value = message;
    }

    localStorage.removeItem("buttonClicked");
    localStorage.removeItem("accessorieButtonClicked");
  }
});
