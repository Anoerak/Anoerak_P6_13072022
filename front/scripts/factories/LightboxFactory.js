class LightboxFactory {
    constructor(data, media, parent) {
        if (media.image !== undefined) {
            const lightboxImage = new LightboxTemplate();
                lightboxImage.displayLightboxImage(data, media, parent);
            return lightboxImage;
        } else if (media.video !== undefined) {
            const lightboxVideo = new LightboxTemplate();
                lightboxVideo.displayLightboxVideo(data, media, parent);
            return lightboxVideo;
        }
    }
}