import { productInfo } from "../js/productInfo.js";

document.addEventListener("DOMContentLoaded", function () {
  function crearTarjetaProducto(producto) {
    let card = document.createElement("div");
    card.className = "p-1 m-2 card bg-product";
    card.style.width = "18rem";

    card.innerHTML = `
        <div class="ml-3 mt-2 text-left">
          <p class="text-center p-small text-white">Category: ${producto.category}</p>
        </div>
        <img src="${producto.image.src}" class="card-img-top img-bright" alt="${producto.image.alt}">
        <div class="card-body text-center">
          <h6 class="h3 text-gold">${producto.name}</h6>
        </div>
        <div class="px-5 mb-4">
          <a class="btn-grad" href="/${producto.link}">Customize</a>
        </div>
      `;

    return card;
  }

  function cargarTarjetasProductos() {
    let container = document.getElementById("prod-container");

    if (container) {
      productInfo.forEach(function (producto) {
        let card = crearTarjetaProducto(producto);
        container.appendChild(card);
      });

      const checkboxes = document.querySelectorAll(".custom-checkbox input");
      const cards = document.querySelectorAll(".card");

      checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
          const selectedCategories = Array.from(checkboxes)
            .filter((cb) => cb.checked)
            .map((cb) =>
              cb.parentElement.nextElementSibling.textContent.trim()
            );

          cards.forEach(function (card) {
            const cardCategory = card
              .querySelector(".p-small")
              .textContent.split(":")[1]
              .trim();
            const shouldShow =
              selectedCategories.includes(cardCategory) ||
              selectedCategories.length === 0;
            card.style.display = shouldShow ? "block" : "none";
          });
        });
      });
    } else {
      console.error("El contenedor de productos no existe en el HTML.");
    }
  }

  cargarTarjetasProductos();
});
