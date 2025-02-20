class MediasFactory {
    constructor(data, parent, index) {
        this.likeSubject = new LikesSubject();
        this.likeCounter = new LikesCounter();
        this.likeSubject.like(this.likeCounter);

        if (data.image !== undefined) {
            this.mediaCard = new MediaCardTemplate(this.likeSubject);
            return this.mediaCard.loadImages(data, parent, index);
        } else if (data.video !== undefined) {
            this.mediaCard = new MediaCardTemplate(this.likeSubject);
            return this.mediaCard.loadVideos(data, parent, index);
        }
    }
}