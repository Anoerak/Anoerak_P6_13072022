    function createTemplate () {
        const orderBar = document.createElement("div");
        orderBar.setAttribute("class", "sort_bar");
        orderBar.innerHTML = `
            <label>Trier par
                <select name="filter" id="filter">
                    <option value="0" selected>Popularité</option>
                    <option value="1" >Date</option>
                    <option value="2">Titre</option>
                </select>                                                    
            </label>
        `;        
        const mediasGallery = document.createElement("article");
        mediasGallery.setAttribute("class", "medias_gallery");
        const rate = document.createElement("div");
        rate.setAttribute("class", "floating_bar");
        rate.innerHTML = `
            <div id="like_total">
                <p id="like_amount">0</p>
                <i class="fas fa-heart fa_full fa_full_animation"></i>
            </div>
            <div id="rate">
            </div>
        `;

        gallery.appendChild(orderBar);
        gallery.appendChild(mediasGallery);
        gallery.appendChild(rate);
    }

    function loadImages (array, parent) {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        card.innerHTML = `
            <img src="../front/assets/images/${array.photographerId}/${array.image}" alt="${array.title}">
            <div class="card_info">
                <h3>${array.title}</h3>
                <span>
                    <p class="art_likes">${array.likes}</p>
                    <i id="custom_heart_${array.image}" class="far fa-heart fa_custom"></i>
                </span>
            </div>
        `;
        parent.appendChild(card);
    }

    function loadVideos (array, parent) {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        card.innerHTML = `
            <video>
                <i class="fa-solid fa-circle-play"></i>
                <source src="../front/assets/images/${array.photographerId}/${array.video}" type="video/mp4">
            </video>
            <div class="card_info">
                <h3>${array.title}</h3>
                <span>
                    <p class="art_likes">${array.likes}</p>
                    <i class="far fa-heart fa_custom"></i>
                </span>
            </div>
        `;
        parent.appendChild(card);   
    }

    function displayHeader (data) {
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

    function displayMedias (array, parent) {
        array.sort((a, b) => b.likes - a.likes);
        for (let j = 0; j < array.length; j++) {
            if (array[j].video === undefined) {
                loadImages(array[j], parent);
            } else {
                loadVideos(array[j], parent);
            };
        };
    }

    function displayGallery(data) {
        const photographersId = window.location.href.substring(window.location.href.indexOf("=") + 1);

        createTemplate();
        displayRate(data,photographersId);
        displayNameModal(data,photographersId);

        let mediasGallery = document.querySelector(".medias_gallery");
        let medias = [];
        for (let i = 0; i < data.media.length; i++) {
            if (data.media[i].photographerId == photographersId) {
                medias.push(data.media[i]);
            };
        }

        displayMedias(medias, mediasGallery);
        orderBy(medias, mediasGallery);
    }

    function displayRate (x,id) {
        const photographer = x.photographers.find(photographer => photographer.id == id);
        document.getElementById("rate").innerHTML = `
            ${photographer.price}€ / jour
        `;
    }

    function totalLikes () {
        const hearts = document.querySelectorAll(".art_likes");
        let total = 0;
        hearts.forEach(heart => {
            total += parseInt(heart.textContent);
        });
        document.querySelector("#like_amount").innerHTML = total;
    }

    function likeHearts () {
        const hearts = document.querySelectorAll(".fa_custom");
        hearts.forEach(heart => {
            heart.addEventListener("click", function () {
                const likeNb = heart.previousElementSibling.textContent;        
                if (heart.classList.contains("fa_custom")) {
                    heart.previousElementSibling.innerHTML = parseInt(likeNb)+1;
                    heart.classList.remove("fa_custom");
                    heart.classList.remove("far");
                    heart.classList.add("fas");
                    heart.classList.add("fa_full");
                    heart.classList.add("fa_full_animation");
                    totalLikes();
                } else {
                    heart.previousElementSibling.innerHTML = parseInt(likeNb)-1;
                    heart.classList.remove("fa_full_animation")
                    heart.classList.remove("fa_full");
                    heart.classList.remove("fas");
                    heart.classList.add("far");
                    heart.classList.add("fa_custom");
                    totalLikes();
                }
            });
        });
    }

    function orderBy (array, parent) {
        const filter = document.querySelector("#filter");
        filter.addEventListener("change", function () {
            if (filter.value == 0) {
                array.sort((a, b) => a.likes - b.likes);
            } else if (filter.value == 1) {
                array.sort((a, b) => new Date(b.date) - new Date(a.date));
            } else if (filter.value == 2) {
                array.sort((a, b) => a.title.localeCompare(b.title));
            }
            parent.innerHTML = "";
            array.forEach(element => {
                if (element.video === undefined) {
                    loadImages(element, parent);
                } else {
                    loadVideos(element, parent);
                }
            });
            totalLikes();
            likeHearts();
        });
    }

