// Get the Data from the JSON File
    async function getPhotographersDatas() {
        let datasFactory = new DatasFactory();
        let datas = datasFactory.getDatas("all");
        return datas;
    }

// Displays the Datas on the DOM
    async function init() {
        const photographers = await getPhotographersDatas();
        displayHeader(photographers);
        displayGallery(photographers);
    };
    init();