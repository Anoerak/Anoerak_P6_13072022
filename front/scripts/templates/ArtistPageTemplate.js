class ArtistPageTemplate {
    constructor(data) {
        this._data = data;
        this._collection = data.collection;
        this.$galleryWrapper = document.getElementById("gallery");
    }

    // Create the Header
    displayHeader() {
        this.$photograhHeaderWrapper = document.querySelector(".photograph-header");
        this.$photograhHeaderWrapper.innerHTML = `
            <div class="photographer_info" aria-label="Informations sur le photographe">
                <h1>${this._data.name}</h1>
                <h2>${this._data.city}, ${this._data.country}</h2>
                <p>${this._data.tagline}</p>
            </div>
            <div class="photographer_photo_contact">
                <button class="contact_button">Contactez-moi</button>
                <img src="../front/assets/photographers/${this._data.portrait}" alt="${this._data.name}">
            </div>
        `;
    }

    // Creates the Skeleton of the Page
    createTemplate() {
        // Creates the Navbar with Filters/Ordering
        const orderBar = document.createElement("nav");
        orderBar.setAttribute("class", "sort_bar");
        orderBar.innerHTML = `
            <label>Trier par
                <ul name="filter" id="filter" aria-label="Menu des filtres, cliquez sur 'm' pour afficher/masquer la liste des options">
                    <li class="choice1" value="0" selected>Popularité <i class="fa-solid fa-angle-down"></i></li>
                    <li class="choice2 hidden" value="1" >Date</li>
                    <li class="choice3 hidden" value="2">Titre</li>
                </ul>                                                    
            </label>
        `;
        let filter = orderBar.querySelectorAll(".hidden");
        window.addEventListener("keypress", function(e) {
            if (e.key === "m") {
                filter.forEach(element => {
                    console.log(element);
                    if (element.classList.contains("hidden")) {
                        element.classList.remove("hidden");
                    } else {
                        element.classList.add("hidden");
                    }                    
                });  
            }
        });
        
        // Creates the Gallery
        const mediasGallery = document.createElement("article");
        mediasGallery.setAttribute("class", "medias_gallery");
        
        // Creates the Floating Bar
        const rate = document.createElement("div");
        rate.setAttribute("class", "floating_bar");
        rate.innerHTML = `
            <div id="like_total" aria-label="Nombre de like pour l'ensemble de la collection de l'artiste">
                <p id="like_amount"></p>
                <i class="fas fa-heart fa_full fa_full_animation" aria-label="icone d'un coeur, non cliquable"></i>
            </div>
            <div id="rate" aria-label="Tarif journalier de l'artiste">${this._data.price}</div>
        `;

        // Inserts Element in the DOM
        this.$galleryWrapper.appendChild(orderBar);
        this.$galleryWrapper.appendChild(mediasGallery);
        this.$galleryWrapper.appendChild(rate);
    }

    render() {
        this.createTemplate();
        this.displayHeader();
    }
}