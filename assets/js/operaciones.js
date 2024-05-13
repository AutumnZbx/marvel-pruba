

export const generateHash = (timestamp,privateKey,publicKey)=>{
    const hash = cryptoJS.MDS(timestamp,privateKey,publicKey)
}

export const renderHeroes = (heroes) => {
    const heroesRow = document.getElementById("heroesRow");

    heroes.forEach(hero => {
        const { id, name, description, thumbnail } = hero;
        const { extension, path } = thumbnail;

        const divCol = document.createElement("div");
        divCol.classList.add("col-xl-3", "col-lg-3", "col-md-3", "col-sm-12", "col-xs-12", "mt-2", "mb-2");

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = `${path}.${extension}`;
        img.alt = `Image of ${name}`;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = name;

        const desc = document.createElement("p");
        desc.classList.add("card-text");
        desc.textContent = description || "No description available";

        const detailsBtn = document.createElement("button");
        detailsBtn.classList.add("details-btn");
        detailsBtn.textContent = "View Details";
        detailsBtn.addEventListener("click", () => showHeroDetails(hero));

        cardBody.appendChild(title);
        cardBody.appendChild(desc);
        cardBody.appendChild(detailsBtn);

        card.appendChild(img);
        card.appendChild(cardBody);

        divCol.appendChild(card);

        heroesRow.appendChild(divCol);
    });
}    
