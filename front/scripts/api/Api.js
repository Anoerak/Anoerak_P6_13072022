class Api {
    constructor(url) {
        this._url = url;
        this._photographers = [];
        this._datas = {
            "photographers": [],
            "media": []
        };
    }

// Get the Datas from the JSON File and Return Only the Needed Datas
    getDatas(filter, id) {
        const datas = (
            fetch(this._url)
            .then(response => response.json())
            .then(data => {
                if (filter === "artistsOnly") {
                    for (let i = 0; i < data.photographers.length; i++) {
                        this._photographers.push(data.photographers[i]);
                    };
                    return this._photographers;
                } else if (filter === "artistWithMedias") {
                    const artist = data.photographers.find(photographer => photographer.id == id);
                    this._datas.photographers.push(artist);
                    for (let i = 0; i < data.media.length; i++) {
                        if (data.media[i].photographerId == id) {
                            this._datas.media.push(data.media[i]);
                        };
                    };
                    return this._datas
                }
            })
            .catch(error => console.log(error))
        );
        return datas;
    }
}