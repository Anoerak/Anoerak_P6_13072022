class LightboxTemplate {
    constructor(data) {
        this._data = data;
        this._collection = data._collection;
        this.$lightboxWrapper = document.querySelector("#lightbox_gallery");
    }

    getMediaId (data) {
        const media = document.getElementsByClassName("medias_reader");
        let collection = [];
        for (let i = 0; i < media.length; i++) {
            const id = media[i].id;
            collection.push(id);
        }
    
        let mediaFactory = new MediaFactory();
    
        mediaFactory.addMedia(data);
    
    }

    loadHTML() {
        this.$lightboxWrapper.innerHTML = `
            <span class="close cursor" onclick="closeModal()">&times;</span>
                <div class="modal-content">
      
                    <div class="mySlides">
                        <div class="numbertext">1 / 4</div>
                        <img src="img_nature_wide.jpg" style="width:100%">
                    </div>
          
                    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                    <a class="next" onclick="plusSlides(1)">&#10095;</a>
                
                    <div class="caption-container">
                        <p id="caption"></p>
                    </div>
      
                    <div class="column">
                        <img class="demo cursor" src="img_nature_wide.jpg" style="width:100%" onclick="currentSlide(1)" alt="Nature and sunrise">
                    </div>
                </div>
                `;
    }

    render() {
        this.loadHTML();
    }

}