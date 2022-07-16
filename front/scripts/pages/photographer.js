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
        const photographer = data.photographers.find(photographer => photographer.id == photographersId);

        createTemplate();

        document.getElementById("rate").innerHTML = `
            ${photographer.price}€ / jour
        `;


        let mediasGallery = document.querySelector(".medias_gallery");

        for (let i = 0; i < data.media.length; i++) {
            if (data.media[i].photographerId == photographersId) {
                let medias = [];
                medias.push(data.media[i]);
                for (let j = 0; j < medias.length; j++) {
                    if (medias[j].video === undefined) {
                        loadImages(medias[j], mediasGallery);
                    } else {
                        loadVideos(medias[j], mediasGallery);
                    };
                };
            }
        }
    }


    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographersDatas();
        displayHeader(photographers);
        displayGallery(photographers);
        totalLikes();
        likeHearts();
    };

    init();


    