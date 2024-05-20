window.addEventListener("load", function () {
  const currentPage = window.location.pathname;

  if (currentPage === "/" || currentPage === "/index.html") {
    document.querySelectorAll(".cat-img").forEach((image) => {
      image.addEventListener("click", function () {
        const category = this.getAttribute("data-category");
        localStorage.setItem("selectedCategory", category);
        window.location.href = "/products.html";
      });
    });
  } else if (currentPage === "/products.html") {
    const selectedCategory = localStorage.getItem("selectedCategory");
    if (selectedCategory) {
      const filter = document.querySelector(`#${selectedCategory}`);
      if (filter) {
        filter.checked = true;
        filter.dispatchEvent(new Event("change"));
        window.addEventListener("load", filterProducts);
      }
      localStorage.removeItem("selectedCategory");
    }

    document.querySelectorAll(".custom-checkbox input").forEach((checkbox) => {
      checkbox.addEventListener("change", filterProducts);
    });

    function filterProducts() {
      const checkboxes = document.querySelectorAll(".custom-checkbox input");
      const cards = document.querySelectorAll(".product-card");
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
    }
  }
});
