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

    function displayGallery(data) {
        const photographersId = window.location.href.substring(window.location.href.indexOf("=") + 1);

        createTemplate();
        displayRate(data,photographersId);
        displayNameModal(data,photographersId);

        let mediasGallery = document.querySelector(".medias_gallery");
        
        let mediaFactory = new MediaFactory();
        let likeFactory = new LikeFactory();

        mediaFactory.addMedia(data);
        mediaFactory.displayMedias(mediasGallery);
        mediaFactory.orderBy(mediasGallery);
        likeFactory.totalLikes();
        likeFactory.likeHearts();
    }

    function displayRate (x,id) {
        const photographer = x.photographers.find(photographer => photographer.id == id);
        document.getElementById("rate").innerHTML = `
            ${photographer.price}€ / jour
        `;
    }