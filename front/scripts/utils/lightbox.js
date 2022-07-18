async function getMediaId (data) {
    const media = document.getElementsByClassName("medias_reader");
    let collection = [];
    for (let i = 0; i < media.length; i++) {
        const id = media[i].id;
        collection.push(id);
    }

    let mediaFactory = new MediaFactory();

    mediaFactory.addMedia(data);

}


