class LightboxTemplate {
    constructor(data) {
        this._collection = data;
        this.$lightboxWrapper = document.querySelector("#lightbox_gallery");
        this._slideIndex = 1;

    }

    displayHTML() {
        this.$lightboxWrapper.innerHTML = `
                <div class="modal-content">
          
                    <a class="prev">&#10094;</a>
                    <a class="next">&#10095;</a>
                    <span class="close cursor" aria-label="Boutton de fermeture de la lightbox">&times;</span>
                
                    <div class="caption-container">
                        <p id="caption"></p>
                    </div>
                </div>
                `;
        this.$lightboxWrapper.style.zIndex = "100";
    }

    displayLightboxImage(data, media, parent) {
        parent.innerHTML = `
                <div class="numbertext">${data.indexOf(media)+1} / ${data.length}</div>
                <img src="../front/assets/images/${media.photographerId}/${media.image}" alt="${media.title}" style="width:100%">
            `;
    }

    displayLightboxVideo(data, media, parent) {
        parent.innerHTML = `
                <div class="numbertext">${data.indexOf(media)+1} / ${data.length}</div>
                <video controls>
                    <source src="../front/assets/images/${media.photographerId}/${media.video}" type="video/mp4">
                </video>
            `;
    }
}