const textarea = document.getElementById("txtmessage");
const label = document.querySelector(".label-control-text");
const maxRows = 8;

textarea.addEventListener("input", function () {
  const currentRows = textarea.value.split("\n").length;

  if (currentRows > maxRows) {
    label.classList.add("hide-label");
  } else {
    label.classList.remove("hide-label");
  }
});
