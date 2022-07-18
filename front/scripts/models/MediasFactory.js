class MediaFactory {

    constructor() {
        this.medias = [];
        this.photographersId = window.location.href.substring(window.location.href.indexOf("=") + 1);
    }

    addMedia(data) {
        for (let i = 0; i < data.media.length; i++) {
            if (data.media[i].photographerId == this.photographersId) {
                this.medias.push(data.media[i]);
            };
        }
        return this.medias;
    }

    loadImages (media,parent) {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        card.innerHTML = `
            <img id="${media.id}" class="medias_reader" src="../front/assets/images/${media.photographerId}/${media.image}" alt="${media.title}">
            <div class="card_info">
                <h3>${media.title}</h3>
                <span>
                    <p class="art_likes">${media.likes}</p>
                    <i id="custom_heart_${media.image}" class="far fa-heart fa_custom"></i>
                </span>
            </div>
        `;
        parent.appendChild(card);
    }

    loadVideos (media, parent) {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        card.innerHTML = `
            <video id="${media.id}" class="mediasReader">
                <i class="fa-solid fa-circle-play"></i>
                <source src="../front/assets/images/${media.photographerId}/${media.video}" type="video/mp4">
            </video>
            <div class="card_info">
                <h3>${media.title}</h3>
                <span>
                    <p class="art_likes">${media.likes}</p>
                    <i class="far fa-heart fa_custom"></i>
                </span>
            </div>
        `;
        parent.appendChild(card);   
    }

    displayMedias (parent) {
        this.medias.sort((a, b) => b.likes - a.likes);
        for (let j = 0; j < this.medias.length; j++) {
            if (this.medias[j].video === undefined) {
                this.loadImages(this.medias[j], parent);
            } else {
                this.loadVideos(this.medias[j], parent);
            };
        };
    };

    orderBy (parent) {
        let array = this.medias;
        const filter = document.querySelector("#filter");
        filter.addEventListener("change", () => {
            if (filter.value == 0) {
                array.sort((a, b) => b.likes - a.likes);
            } else if (filter.value == 1) {
                array.sort((a, b) => new Date(b.date) - new Date(a.date));
            } else if (filter.value == 2) {
                array.sort((a, b) => a.title.localeCompare(b.title));
            }
            parent.innerHTML = "";
            array.forEach(element => {
                if (element.video === undefined) {
                    this.loadImages(element, parent);
                } else {
                    this.loadVideos(element, parent);
                }
            });
            let likeFactory = new LikeFactory();
            likeFactory.likeHearts();
            likeFactory.totalLikes();
        });
    };
    
}