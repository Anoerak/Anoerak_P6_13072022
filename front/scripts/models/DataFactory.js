class DatasFactory {
    constructor() {
        this.photographers = [];
        this.datas = {
            "photographers": [],
            "media": [],
        };
    }

// Get the Datas from the JSON File and Return Only the Needed Datas
    getDatas(filter) {
        const datas = (
            fetch("../front/data/photographers.json")
            .then(response => response.json())
            .then(data => {
                if (filter === "artists") {
                    for (let i = 0; i < data.photographers.length; i++) {
                        this.photographers.push(data.photographers[i]);
                    };
                    return this.photographers;
                } else if (filter === "all") {
                    for (let i = 0; i < data.photographers.length; i++) {
                        this.datas.photographers.push(data.photographers[i]);
                    };
                    for (let i = 0; i < data.media.length; i++) {
                        this.datas.media.push(data.media[i]);
                    };
                    return this.datas
                }
            })
            .catch(error => console.log(error))
        );
        return datas;
    }
}