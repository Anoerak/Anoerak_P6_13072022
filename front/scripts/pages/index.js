    async function getPhotographers() {
        const photographers = await (
            fetch("../front/data/photographers.json")
            .then(response => response.json())
            .then(data => {
                return data.photographers;
            }
            )
            .catch(error => console.log(error))
        );
        return { photographers };
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();

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