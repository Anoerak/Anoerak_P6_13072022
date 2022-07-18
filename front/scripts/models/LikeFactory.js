class LikeFactory {

    totalLikes () {
        const hearts = document.querySelectorAll(".art_likes");
        let total = 0;
        hearts.forEach(heart => {
            total += parseInt(heart.textContent);
        });
        document.querySelector("#like_amount").innerHTML = total;
    }

    likeHearts () {
        const hearts = document.querySelectorAll(".fa_custom");
        hearts.forEach(heart => {
            heart.addEventListener("click", () => {
                console.log("click");
                const likeNb = heart.previousElementSibling.textContent;        
                if (heart.classList.contains("fa_custom")) {
                    heart.previousElementSibling.innerHTML = parseInt(likeNb)+1;
                    heart.classList.remove("fa_custom");
                    heart.classList.remove("far");
                    heart.classList.add("fas");
                    heart.classList.add("fa_full");
                    heart.classList.add("fa_full_animation");
                    this.totalLikes();
                } else {
                    heart.previousElementSibling.innerHTML = parseInt(likeNb)-1;
                    heart.classList.remove("fa_full_animation")
                    heart.classList.remove("fa_full");
                    heart.classList.remove("fas");
                    heart.classList.add("far");
                    heart.classList.add("fa_custom");
                    this.totalLikes();
                }
            });
        });
    }
    
}