class SortBy {
    constructor(data) {
        this._data = data;
        this._collection = data._collection;
        this.$mediasGallery = document.querySelector(".medias_gallery");
    }

    sortByPopularity() {
        this._collection.sort((a, b) => b.likes - a.likes);
        this.$mediasGallery.innerHTML = "";
        return this._collection
    }

    sortByDate() {
        this._collection.sort((a, b) => new Date(b.date) - new Date(a.date));
        this.$mediasGallery.innerHTML = "";
        return this._collection
    }

    sortByName() {
        this._collection.sort((a, b) => a.title.localeCompare(b.title));
        this.$mediasGallery.innerHTML = "";
        return this._collection
    }

    eventListener() {
        const sortByPopularity = document.querySelector(".choice1");
        const sortByDate = document.querySelector(".choice2");
        const sortByName = document.querySelector(".choice3");
        
        sortByPopularity.addEventListener("click", () => {
            this.displaySortedGallery(this.sortByPopularity());
        });
        sortByDate.addEventListener("click", () => {
            this.displaySortedGallery(this.sortByDate());
        });
        sortByName.addEventListener("click", () => {
            this.displaySortedGallery(this.sortByName());
        });

        return this._collection;
    }

    displaySortedGallery() {
        this._sortedCollection = this.eventListener();
        this._sortedCollection.forEach(media => {
            let mediaIndex = this._sortedCollection.indexOf(media)+1;
            let mediasFactory = new MediasFactory(media, this.$mediasGallery, mediaIndex);
            return mediasFactory;
        });
        const displayTotalLikes = new LikesCounter();
        displayTotalLikes.totalLikes();
        const lightbox = new Lightbox(this._sortedCollection);
        lightbox.openLightbox();
    }
}