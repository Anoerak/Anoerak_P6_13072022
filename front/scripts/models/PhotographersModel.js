class PhotographersModel {
    constructor(data) {
        this._name = data.name;
        this._city = data.city;
        this._country = data.country;
        this._tagline = data.tagline;
        this._portrait = data.portrait;
        this._id = data.id;
        this._price = data.price+"€/jour";
        this._picture = `assets/photographers/${data.portrait}`;
    }

    get name() {
        return this._name;
    }
    
    get city() {
        return this._city;
    }

    get country() {
        return this._country;
    }

    get tagline() {
        return this._tagline;
    }

    get portrait() {
        return this._portrait;
    }

    get id() {
        return this._id;
    }

    get picture() {
        return this._picture;
    }

    get price() {
        return this._price;
    }
}