document.addEventListener("DOMContentLoaded", function () {
  var requestButton = document.getElementById("requestButton");

  requestButton.addEventListener("click", function (event) {
    event.preventDefault();

    window.location.href = "/index.html#contact";

    var storedInfo = localStorage.getItem("savedInfo");

    if (storedInfo) {
      var formFields = document.querySelectorAll("#contact input[type=text]");
      formFields.forEach(function (field, index) {
        var infoArray = storedInfo.split(",");
        field.value = infoArray[index] || "";
      });
    }
  });
});
