class PhotographersCardsTemplate {
    constructor(photographer) {
        this._photographer = photographer;
    }
    
    getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.setAttribute("id", this._photographer.id);
        article.setAttribute("class", "photographer_page_link");
        article.setAttribute("aria-label", "lien vers la page de "+ this._photographer.name);

        article.innerHTML = `
            <img src="${this._photographer.picture}" alt="${this._photographer.name}" class="photographer_picture">
            <div class="infos_photographer" aria-label="Informations sur le photographe">
                <h2 aria-label="Nom du photographe">${this._photographer.name}</h2>
                <h3 aria-label="Localisation du photographe">${this._photographer.city}, ${this._photographer.country}</h3>
                <p class="puchline" aria-label="Punchline du photographe">${this._photographer.tagline}</p>
                <p class="rate" aria-label="Tarif du photographe">${this._photographer.price}</p>
            </div>
            `;
        return (article);
    }
}