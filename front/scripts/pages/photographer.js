class PhotographerPage {
    constructor() {
        this.photographerApi = new Api("./data/photographers.json");
        this.photographerId = window.location.href.substring(window.location.href.indexOf("=") + 1);
        this.$mediasGalleryWrapper = document.querySelector(".medias-gallery");
    }

    // Get the Data for this Artist from the JSON File
    async getPhotographerDatas() {
        let datas = this.photographerApi.getDatas("artistWithMedias", this.photographerId);
        return datas;
    }

    // Get the Data for this Artist from the Models and Templates
    async displayData(data) {
        const artistInfoAndCollection = new ArtistCollectionModel(data);

        const artistPage = new ArtistPageTemplate(artistInfoAndCollection);
        artistPage.render();

        const Sorter = new SortBy(artistInfoAndCollection);
        Sorter.displaySortedGallery();

        const contactForm = new ContactForm(artistInfoAndCollection);
        contactForm.render();
    }

    // Displays the Datas on the DOM
    async  init() {
        const photographer = await this.getPhotographerDatas();
        this.displayData(photographer);
    }
}

const photographerPage = new PhotographerPage();
photographerPage.init();

