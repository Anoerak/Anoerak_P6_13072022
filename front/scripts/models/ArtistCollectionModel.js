class ArtistCollectionModel {
    constructor(data) {
        this._name = data.photographers[0].name;
        this._city = data.photographers[0].city;
        this._country = data.photographers[0].country;
        this._tagline = data.photographers[0].tagline;
        this._portrait = data.photographers[0].portrait;
        this._id = data.photographers[0].id;
        this._price = data.photographers[0].price+"€/jour";
        this._picture = `assets/photographers/${data.photographers[0].portrait}`;
        this._collection = data.media;
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

    get collection() {
        return this._collection;
    }

    get allLikes() {
        let likes = 0;
        this._collection.forEach(media => {
            likes += media.likes;
        }
        );
        return likes;
    }

}