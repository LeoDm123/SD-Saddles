import { accessorieInfo } from "./accessorieInfo.js";

document.addEventListener("DOMContentLoaded", function () {
  console.log("llamado");
  function crearTarjetaAccesorio(accesorio) {
    let card = document.createElement("div");
    card.className = "p-1 m-2 card bg-product";
    card.style.width = "18rem";

    card.innerHTML = `
      <div class="card-container">
        <div class="ml-3 mt-2 text-left">
          <p class="text-center p-small text-white">Category: ${accesorio.category}</p>
        </div>
        <div class="accesorie-div">
        <a href="/${accesorio.link}"><img src="${accesorio.image.src}" class="card-img-top img-bright accesorie-img" alt="${accesorio.image.alt}"></a></div>
        <div>
          <div class="card-body text-center">
            <h6 class="h3 text-gold">${accesorio.name}</h6>
          </div>
          <div class="btn-card mb-4">
            <div class="btn-size">
              <a class="btn-grad" href="/${accesorio.link}">Customize</a>
            </div>
          </div>
        </div>
      </div>
      `;

    return card;
  }

  function cargarTarjetasAccesorios() {
    let container = document.getElementById("prod-container");

    if (container) {
      accessorieInfo.forEach(function (accesorio) {
        let card = crearTarjetaAccesorio(accesorio);
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
      console.error("El contenedor de accesorios no existe en el HTML.");
    }
  }

  cargarTarjetasAccesorios();
});
