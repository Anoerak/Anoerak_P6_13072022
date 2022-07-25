class LikesCounter {
    constructor() {
        this._count = 0;
        this._$likeAmount = document.querySelector("#like_amount");
    }

    totalLikes () {
        this._$like = document.querySelectorAll(".art_likes");
        let total = 0;
        this._$like.forEach(heart => {
            total += parseInt(heart.textContent);
        });
        this._$likeAmount.innerHTML = total;
    }

    update(action) {
        if (action === "like") {
            this._count++;
            this.totalLikes();
        } else if (action === "unlike") {
            this._count--;
            this.totalLikes();
        } else {
            throw "Action not supported";
        }
    }

}