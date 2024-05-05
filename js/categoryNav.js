document.addEventListener("DOMContentLoaded", function () {
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  var categoryParam = getUrlParameter("category");

  if (categoryParam) {
    var checkbox = document.getElementById(
      "checkbox" +
        categoryParam.charAt(0).toUpperCase() +
        categoryParam.slice(1)
    );
    if (checkbox) {
      checkbox.checked = true;
    }
  }
});
