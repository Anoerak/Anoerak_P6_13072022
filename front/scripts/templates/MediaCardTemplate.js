class MediaCardTemplate {
    constructor(likeSubject) {
        this._likeSubject = likeSubject;
    }

    // Manage the Click on the Like
    manageLike() {
        const that = this;
        this.$wrapper
            .querySelector(".likeUnlike")
            .addEventListener("click", function() {
                if (this.firstChild.classList.contains("fa_custom")) {
                    this.previousElementSibling.innerHTML = parseInt(this.previousElementSibling.textContent)+1;
                    this.firstChild.classList.remove("fa_custom");
                    this.firstChild.classList.remove("far");
                    this.firstChild.classList.add("fas");
                    this.firstChild.classList.add("fa_full");
                    this.firstChild.classList.add("fa_full_animation");
                    this.ariaLabel = "icône d'un coeur, cliquable pour retirer un like (vous avez déjà aimé ce média)";
                    that._likeSubject.click("like");
                } else {
                    this.previousElementSibling.innerHTML = parseInt(this.previousElementSibling.textContent)-1;
                    this.firstChild.classList.remove("fa_full_animation")
                    this.firstChild.classList.remove("fa_full");
                    this.firstChild.classList.remove("fas");
                    this.firstChild.classList.add("far");
                    this.firstChild.classList.add("fa_custom");
                    this.ariaLabel = "icône d'un coeur, cliquable pour ajouter un like (vous n'avez pas encore aimé ce média)";
                    that._likeSubject.click("unlike");
                }
            })
        this.$wrapper.querySelector(".likeUnlike").addEventListener("keydown", function(e) {
            if (e.keyCode === 13) {
                if (this.firstChild.classList.contains("fa_custom")) {
                    this.previousElementSibling.innerHTML = parseInt(this.previousElementSibling.textContent)+1;
                    this.firstChild.classList.remove("fa_custom");
                    this.firstChild.classList.remove("far");
                    this.firstChild.classList.add("fas");
                    this.firstChild.classList.add("fa_full");
                    this.firstChild.classList.add("fa_full_animation");
                    this.ariaLabel = "icône d'un coeur, cliquable pour retirer un like (vous avez déjà aimé ce média)";
                    that._likeSubject.click("like");
                } else {
                    this.previousElementSibling.innerHTML = parseInt(this.previousElementSibling.textContent)-1;
                    this.firstChild.classList.remove("fa_full_animation")
                    this.firstChild.classList.remove("fa_full");
                    this.firstChild.classList.remove("fas");
                    this.firstChild.classList.add("far");
                    this.firstChild.classList.add("fa_custom");
                    this.ariaLabel = "icône d'un coeur, cliquable pour ajouter un like (vous n'avez pas encore aimé ce média)";
                    that._likeSubject.click("unlike");
                }
            }
        });
    }

    // Create the Card on the DOM for Pictures
    loadImages (media, parent, index) {
        this.$wrapper = document.createElement("div")
        this.$wrapper.classList.add("card");
        const card = `
            <img id="${index}" class="medias_reader" tabindex="0" src="../front/assets/images/${media.photographerId}/${media.image}" alt="${media.title}" aria-label="Cliquez pour lancer la visionneuse de médias.">
            <div class="card_info">
                <h3>${media.title}</h3>
                <span aria-label="Nombre de like pour ce média et coeur cliquable pour liké.">
                    <p class="art_likes" aria-label="Nombre de like pour ce média">${media.likes}</p>
                    <span class="likeUnlike" tabindex="0" aria-label="icône d'un coeur, cliquable pour ajouter/retirer un like (vous n'avez pas encore aimé ce média)"><i id="custom_heart_${media.image}" class="far fa-heart fa_custom"></i></span>
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
            <video id="${index}" class="medias_reader" aria-label="Vidéo sans son, cliquez pour lancer la visionneuse de médias">
                <source src="../front/assets/images/${media.photographerId}/${media.video}" type="video/mp4" alt="${media.title}">
            </video>
            <div class="card_info">
                <h3>${media.title}</h3>
                <span aria-label="Nombre de like pour ce média et coeur cliquable pour liké.">
                    <p class="art_likes">${media.likes}</p>
                    <span class="likeUnlike" aria-label="icône d'un coeur, cliquable pour ajouter/retirer un like (vous n'avez pas encore aimé ce média)"><i class="far fa-heart fa_custom"></i></span>
                </span>
            </div>
        `;
        this.$wrapper.innerHTML = card;
        parent.appendChild(this.$wrapper);
        this.manageLike();
    }
}