document.addEventListener("DOMContentLoaded", function () {
  var requestButton = document.getElementById("accessorieRequestButton");

  requestButton.addEventListener("click", function (event) {
    event.preventDefault();

    localStorage.setItem("accessorieButtonClicked", "true");

    window.location.href = "/index.html#contact";
  });
});
