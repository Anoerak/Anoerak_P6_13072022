class LikesSubject {
    constructor() {
        this._likeObservers = [];
    }

    like(likeObserber) {
        this._likeObservers.push(likeObserber);
    }

    unlike(likeObserber) {
        this.likeObserbers = this.likeObserbers.filter(observer => observer !== likeObserber);
    }
    
    click(action) {
        this._likeObservers.forEach(observer => observer.update(action));
    }
}