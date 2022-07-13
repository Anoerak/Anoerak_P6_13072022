function photographerFactory(data) {
    const { name, portrait, city, country, price, tagline, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.setAttribute("id", id);
        article.setAttribute("class", "photographer_page_link");
        article.setAttribute("aria-label", "lien vers la page de "+name);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", name);
        const infos = document.createElement( 'div' );
        infos.setAttribute("class", "infos_photographer");
        infos.setAttribute("aria-label", "Informations sur le photographe");
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        h2.setAttribute("aria-label", "Nom du photographe");
        const location = document.createElement( 'h3' );
        location.textContent = city+", "+country;
        location.setAttribute("aria-label", "Localisation du photographe");
        const punchline = document.createElement( 'p' );
        punchline.textContent = tagline;
        punchline.setAttribute("aria-label", "Punchline du photographe");
        const rate = document.createElement( 'p' );
        rate.setAttribute("class", "rate");
        rate.setAttribute("aria-label", "Tarif du photographe");
        rate.textContent = price+"€/jour";
        article.appendChild(img);
        article.appendChild(infos);
        infos.appendChild(h2);
        infos.appendChild(location);
        infos.appendChild(punchline);
        infos.appendChild(rate);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}