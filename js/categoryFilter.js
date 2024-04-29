document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".custom-checkbox input");
  const cards = document.querySelectorAll(".product-card");

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      const selectedCategories = Array.from(checkboxes)
        .filter((cb) => cb.checked)
        .map((cb) => cb.parentElement.nextElementSibling.textContent.trim());

      cards.forEach(function (card) {
        const cardCategory = card.getAttribute("data-category");
        const shouldShow =
          selectedCategories.includes(cardCategory) ||
          selectedCategories.length === 0;
        card.style.display = shouldShow ? "block" : "none";
      });
    });
  });
});
