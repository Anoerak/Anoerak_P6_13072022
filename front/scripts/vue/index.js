// Get the List of the Artists from the JSON File
    async function getPhotographers() {
        let datasFactory = new DatasFactory();
        let datas = datasFactory.getDatas("artists");
        return datas;
    }

// Displays the Datas on the DOM
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
            
        photographers.forEach((element) => {
            const photographerModel = photographerFactory(element);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

// Initialize the Page
    async function init() {
        const photographers = await getPhotographers();
        displayData(photographers);
    };
    init();

// Get the ID of the Artist and Pass the Data through the URL
    async function linkPage() {
        await getPhotographers();
        const photographerPageLink = document.querySelectorAll(".photographer_page_link");
        for (let i = 0; i < photographerPageLink.length; i++) {
            photographerPageLink[i].addEventListener("click", function() {
                const id = this.getAttribute("id");
                window.location.href = "photographer.html?id="+id;
            }
            );
        }
    }
    linkPage();