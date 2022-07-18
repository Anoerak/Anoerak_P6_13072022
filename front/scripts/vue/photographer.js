const page2 = window.location.protocol + '//' + location.host + location.pathname;

//Mettre le code JavaScript lié à la page photographer.html

if (page2 === "http://127.0.0.1:5501/front/photographer.html") {

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

    async function init() {
        const { photographers } = await getPhotographersDatas();
        displayHeader(photographers);
        displayGallery(photographers);
        getMediaId(photographers);
    };

    init();
}