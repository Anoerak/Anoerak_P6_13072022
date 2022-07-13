//Mettre le code JavaScript lié à la page photographer.html
    async function getPhotographers() {
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


    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        console.log(photographers);
        const photographersId = window.location.href.substring(window.location.href.indexOf("=") + 1);
        console.log(photographersId);
        const photographer = photographers.photographers.find(photographer => photographer.id == photographersId);
        console.log(photographer);
        console.log(photographers.media);
        for (let i = 0; i < photographers.media.length; i++) {
            if (photographers.media[i].photographerId == photographersId) {
                let medias = [];
                medias.push(photographers.media[i]);
                console.log(medias);
            }
        }
    };
    
    init();