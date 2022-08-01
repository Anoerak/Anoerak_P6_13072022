class LikesSubject {
    constructor() {
        this._likeObservers = [];
    }

    like(likeObserver) {
        this._likeObservers.push(likeObserver);
    }

    unlike(likeObserver) {
        this.likeObservers = this.likeObservers.filter(observer => observer !== likeObserver);
    }
    
    click(action) {
        this._likeObservers.forEach(observer => observer.update(action));
    }
}