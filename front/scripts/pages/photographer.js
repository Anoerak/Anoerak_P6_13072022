//Mettre le code JavaScript lié à la page photographer.html
    async function getPhotographersDatas() {
        const photographers = await (
            fetch("../front/data/photographers.json")
            .then(response => response.json())
            .then(data => {
                return data;
            }
            )
            .catch(error => console.log(error))
        );
        return { photographers };
    }

    async function displayHeader(data) {
        const photographersId = window.location.href.substring(window.location.href.indexOf("=") + 1);
        const photographer = data.photographers.find(photographer => photographer.id == photographersId);
        console.log(photographer);

        const photograhHeader = document.querySelector(".photograph-header");
        const photographerInfo = document.createElement("div");
        photographerInfo.setAttribute("aria-label", "Informations sur le photographe");
        photographerInfo.setAttribute("class", "photographer_info");
        photographerInfo.innerHTML = `
            <h2>${photographer.name}</h2>
            <h3>${photographer.city}, ${photographer.country}</h3>
            <p>${photographer.tagline}</p>
        `;
        const photographerProfilPicture = document.createElement("img", photographer.name);
        photographerProfilPicture.setAttribute("src", "../front/assets/photographers/"+photographer.portrait);

        photograhHeader.appendChild(photographerInfo);
        photograhHeader.appendChild(photographerProfilPicture);
    }

    async function displayGallery(data) {
        const photographersId = window.location.href.substring(window.location.href.indexOf("=") + 1);

        const orderBar = document.createElement("div");
        orderBar.setAttribute("class", "order_bar");
        const orderText = document.createElement("p");
        orderText.innerHTML = "Trier par "; 
        const dropdown = document.createElement("nav");
        dropdown.innerHTML = `
            <button>Popularité <i class="fa-solid fa-angle-up"></i></button>`;
        dropdown.setAttribute("class", "dropdown");
        const mediasGallery = document.createElement("div");
        mediasGallery.setAttribute("class", "medias_gallery");

        gallery.appendChild(orderBar);
        gallery.appendChild(mediasGallery);
        orderBar.appendChild(orderText);
        orderBar.appendChild(dropdown);

        for (let i = 0; i < data.media.length; i++) {
            if (data.media[i].photographerId == photographersId) {
                let medias = [];
                medias.push(data.media[i]);
                for (let j = 0; j < medias.length; j++) {
                    const card = document.createElement("div");
                    card.setAttribute("class", "card");
                    card.innerHTML = `
                        <img src="../front/assets/images/${medias[j].photographerId}/${medias[j].image}" alt="${medias[j].title}">
                        <div class="card_info">
                            <h3>${medias[j].title}</h3>
                            <span>${medias[j].likes} <i class="fa-solid fa-heart"></i></span>
                        </div>
                    `;
                    mediasGallery.appendChild(card);
                }
            }
        }
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographersDatas();
        console.log(photographers);
        displayHeader(photographers);
        displayGallery(photographers);
    };
    
    init();