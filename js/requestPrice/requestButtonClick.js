document.addEventListener("DOMContentLoaded", function () {
  var requestButton = document.getElementById("requestButton");

  requestButton.addEventListener("click", function (event) {
    event.preventDefault();

    localStorage.setItem("buttonClicked", "true");

    window.location.href = "/index.html#contact";
  });
});
