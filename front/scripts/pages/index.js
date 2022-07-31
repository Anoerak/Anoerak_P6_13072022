class Index {
    constructor() {
        this.photographersApi = new Api("../front/data/photographers.json");
    }

    // Get the List of the Artists from the JSON File
    async getPhotographers() {
        let datas = this.photographersApi.getDatas("artistsOnly");
        return datas;
    }

    // Displays the Datas on the DOM
    async displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        photographers.forEach((element) => {
            const photographer = new PhotographersModel(element);
            const photographerCard = new PhotographersCardsTemplate(photographer);
            const photographerCardDOM = photographerCard.getUserCardDOM();
            photographersSection.appendChild(photographerCardDOM);
        });

        // Get the ID of the Artist and Pass the Data through the URL
        const photographerPageLink = document.querySelectorAll(".photographer_page_link");
        for (let i = 0; i < photographerPageLink.length; i++) {
            photographerPageLink[i].addEventListener("click", function() {
                const id = this.getAttribute("id");
                window.location.href = "photographer.html?id="+id;
            });
        }
    }

    // Initialize the Page
    async init() {
        const photographers = await this.getPhotographers();
        this.displayData(photographers);
    }

}

const index = new Index();
index.init();






