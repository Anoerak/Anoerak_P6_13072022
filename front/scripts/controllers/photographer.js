function photographerFactory(data) {
    const { name, portrait, city, country, price, tagline, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.setAttribute("id", id);
        article.setAttribute("class", "photographer_page_link");
        article.setAttribute("aria-label", "lien vers la page de "+name);

        article.innerHTML = `
            <img src="${picture}" alt="${name}" class="photographer_picture">
            <div class="infos_photographer" aria-label="Informations sur le photographe">
                <h2 aria-label="Nom du photographe">${name}</h2>
                <h3 aria-label="Localisation du photographe">${city}, ${country}</h3>
                <p aria-label="Punchline du photographe">${tagline}</p>
                <p class="rate" aria-label="Tarif du photographe">${price}€/jour</p>
            </div>
            `;
        return (article);
    }
    return { name, picture, getUserCardDOM }
}