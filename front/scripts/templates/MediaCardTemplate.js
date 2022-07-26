class MediaCardTemplate {
    constructor(likeSubject) {
        this._likeSubject = likeSubject;
    }

    // Manage the Click on the Like
    manageLike() {
        const that = this;
        this.$wrapper
            .querySelector(".fa_custom")
            .addEventListener("click", function() {
                if (this.classList.contains("fa_custom")) {
                    this.previousElementSibling.innerHTML = parseInt(this.previousElementSibling.textContent)+1;
                    this.classList.remove("fa_custom");
                    this.classList.remove("far");
                    this.classList.add("fas");
                    this.classList.add("fa_full");
                    this.classList.add("fa_full_animation");
                    that._likeSubject.click("like");
                } else {
                    this.previousElementSibling.innerHTML = parseInt(this.previousElementSibling.textContent)-1;
                    this.classList.remove("fa_full_animation")
                    this.classList.remove("fa_full");
                    this.classList.remove("fas");
                    this.classList.add("far");
                    this.classList.add("fa_custom");
                    that._likeSubject.click("unlike");
                }
            }
        );
    };

    // Create the Card on the DOM for Pictures
    loadImages (media, parent, index) {
        this.$wrapper = document.createElement("div")
        this.$wrapper.classList.add("card");
        const card = `
            <img id="${index}" class="medias_reader" src="../front/assets/images/${media.photographerId}/${media.image}" alt="${media.title}">
            <div class="card_info">
                <h3>${media.title}</h3>
                <span>
                    <p class="art_likes">${media.likes}</p>
                    <i id="custom_heart_${media.image}" class="far fa-heart fa_custom"></i>
                </span>
            </div>
        `;
        this.$wrapper.innerHTML = card;
        parent.appendChild(this.$wrapper);
        this.manageLike();
    }

    // Create the Card on the DOM for Videos
    loadVideos (media, parent, index) {
        this.$wrapper = document.createElement("div")
        this.$wrapper.classList.add("card");
        const card  = `
            <video id="${index}" class="medias_reader">
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
        this.$wrapper.innerHTML = card;
        parent.appendChild(this.$wrapper);
        this.manageLike();
    }
}