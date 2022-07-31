class Lightbox {
    constructor (data) {
        this._collection = data;
        this.$lightboxWrapper = document.querySelector("#lightbox_gallery");
        this._slideIndex = 1;
        this.$mainHtmlWrapper = document.querySelector("main");
        this.$headerWrapper = document.querySelector("header");
    }
    
    displayMedias(data) {
        data.forEach(media => {
            this.$mySlideWrapper = document.createElement("div");
            this.$mySlideWrapper.className = "mySlides";
            const lightboxFactory = new LightboxFactory(data, media, this.$mySlideWrapper);
            let parent = document.querySelector(".prev").parentNode;
            let child = document.querySelector(".next");
            parent.insertBefore(this.$mySlideWrapper, child);
            return lightboxFactory;
        });
    }

    openLightbox() {
        const displayLightboxHtml = new LightboxTemplate();
        const cards = document.querySelectorAll(".medias_reader");
        cards.forEach(card => {
            card.addEventListener("click", () => {
                const imgId = parseInt(card.getAttribute("id"));
                displayLightboxHtml.displayHTML();
                this.displayMedias(this._collection);
                this.currentSlide(imgId)
                this.previousSlide();
                this.nextslide();
                this.$headerWrapper.ariaHidden = "true";
                this.$mainHtmlWrapper.ariaHidden = "true";
                this.$lightboxWrapper.ariaHidden = "false";
                this.$lightboxWrapper.style.display = "block";
                this.closeLightbox();
            });
        });
    }

    closeLightbox() {
        const closeLightbox = document.querySelector(".cursor");
        closeLightbox.addEventListener("click", () => {
            this.$lightboxWrapper.style.display = "none";
            this.$lightboxWrapper.innerHTML = "";
            this.$lightboxWrapper.style.zIndex = "-10";
            this.$headerWrapper.ariaHidden = "false";
            this.$mainHtmlWrapper.ariaHidden = "false";
            this.$lightboxWrapper.ariaHidden = "true";
    });
        window.addEventListener("keyup", (e) => {
            if (e.keyCode === 27) {
                this.$lightboxWrapper.style.display = "none";
                this.$lightboxWrapper.innerHTML = "";
                this.$lightboxWrapper.style.zIndex = "-10";
                this.$headerWrapper.ariaHidden = "false";
                this.$mainHtmlWrapper.ariaHidden = "false";
                this.$lightboxWrapper.ariaHidden = "true";
            }
        });
    }

    currentSlide(n) {
        this.showSlides(this._slideIndex = n);
        parseInt(this._slideIndex);
        return (this._slideIndex);
    }

    previousSlide() {
        const prev = document.querySelector(".prev");
        prev.addEventListener("click", () => {
            this.showSlides(this._slideIndex += -1);
        });
        window.addEventListener("keyup", (e) => {
            if (e.keyCode === 37) {
                this.showSlides(this._slideIndex += -1);
            }
        });
    }

    nextslide() {
        const next = document.querySelector(".next");
        next.addEventListener("click", () => {
            this.showSlides(this._slideIndex += 1);
        });
        window.addEventListener("keyup", (e) => {
            if (e.keyCode === 39) {
                this.showSlides(this._slideIndex += 1);
            }
        });
    }
        
    showSlides(n) {
        const slides = document.getElementsByClassName("mySlides");
        const captionText = document.getElementById("caption");
        if (n > slides.length) {
            this._slideIndex = 1;
        }
        if (n < 1) {
            this._slideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[this._slideIndex - 1].style.display = "block";
        captionText.innerHTML = this._collection[this._slideIndex - 1].title;
    }
}