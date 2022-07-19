class MediaFactory {

    constructor() {
        this.medias = [];
        this.photographersId = window.location.href.substring(window.location.href.indexOf("=") + 1);
    }
    
// Get the Photos/Videos of the Artist on Page Only
    addMedia(data) {
        for (let i = 0; i < data.media.length; i++) {
            if (data.media[i].photographerId == this.photographersId) {
                this.medias.push(data.media[i]);
            };
        }
        return this.medias;
    }

// Create the Card on the DOM for Pictures
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

// Create the Card on the DOM for Videos
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

// Display the Medias on the DOM and Order them by Likes (descending)
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

// Order the Medias by Likes, Date or Title by Clicking on the Dropdown Menu
    orderBy (parent) {
        const filter = document.querySelector("#filter");
        filter.addEventListener("change", () => {
            if (filter.value == 0) {
                this.medias.sort((a, b) => b.likes - a.likes);
            } else if (filter.value == 1) {
                this.medias.sort((a, b) => new Date(b.date) - new Date(a.date));
            } else if (filter.value == 2) {
                this.medias.sort((a, b) => a.title.localeCompare(b.title));
            }
            parent.innerHTML = "";
            this.medias.forEach(element => {
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