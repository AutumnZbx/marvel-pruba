import { getMarvelData } from "./fetchs/getMarvelData.js";

const showHeroDetails = (hero) => {
    const { name, description, thumbnail } = hero;
    const { extension, path } = thumbnail;

    const modal = document.getElementById("heroModal");
    const heroDetails = document.getElementById("heroDetails");

    // Llenar el contenido del modal con los detalles del héroe
    heroDetails.innerHTML = `
        <img src="${path}.${extension}" alt="Image of ${name}">
        <h2>${name}</h2>
        <p>${description || "No description available"}</p>
    `;

    modal.style.display = "block";

    // Cerrar el modal al hacer clic en la "x"
    const closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Cerrar el modal al hacer clic fuera del contenido del modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Variable para llevar el seguimiento del número de héroes cargados
let offset = 0;

// Cargar los primeros héroes al cargar la página
getMarvelData(offset);

// Detectar cuándo el usuario llega al final de la página
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // Incrementar el offset y cargar más héroes
        offset += 20;
        getMarvelData(offset);
    }
});