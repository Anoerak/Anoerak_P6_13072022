    function createTemplate () {
        const orderBar = document.createElement("div");
        orderBar.setAttribute("class", "order_bar");
        orderBar.innerHTML = `
            <p>Trier par </p>
            <nav class="dropdown">
                <ul>Popularité <i class="fa-solid fa-angle-up"></i>
                    <li>Date</li>
                    <li>Likes</li>
                </ul>
            </nav>
        `;        
        const mediasGallery = document.createElement("div");
        mediasGallery.setAttribute("class", "medias_gallery");
        mediasGallery.innerHTML = `
        <div class="floating_bar">
            <div id="like_total">
            <p id="like_amount">0</p>
            <i class="fas fa-heart fa_full fa_full_animation"></i>
            </div>
            <div id="rate">
            </div>
        </div>
            `;


        gallery.appendChild(orderBar);
        gallery.appendChild(mediasGallery);
    }

    function loadImages (array, parent) {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        card.innerHTML = `
            <img src="../front/assets/images/${array.photographerId}/${array.image}" alt="${array.title}">
            <div class="card_info">
                <h3>${array.title}</h3>
                <span>
                    <p class="art_likes">${array.likes}</p>
                    <i id="custom_heart_${array.image}" class="far fa-heart fa_custom"></i>
                </span>
            </div>
        `;
        parent.appendChild(card);
    }

    function loadVideos (array, parent) {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        card.innerHTML = `
            <video>
                <i class="fa-solid fa-circle-play"></i>
                <source src="../front/assets/images/${array.photographerId}/${array.video}" type="video/mp4">
            </video>
            <div class="card_info">
                <h3>${array.title}</h3>
                <span>
                    <p class="art_likes">${array.likes}</p>
                    <i class="far fa-heart fa_custom"></i>
                </span>
            </div>
        `;
        parent.appendChild(card);   
    }

    function totalLikes () {
        const hearts = document.querySelectorAll(".art_likes");
        let total = 0;
        hearts.forEach(heart => {
            total += parseInt(heart.textContent);
        });
        document.querySelector("#like_amount").innerHTML = total;
    }

    function likeHearts () {
        const hearts = document.querySelectorAll(".fa_custom");
        hearts.forEach(heart => {
            heart.addEventListener("click", function () {
                const likeNb = heart.previousElementSibling.textContent;        
                if (heart.classList.contains("fa_custom")) {
                    heart.previousElementSibling.innerHTML = parseInt(likeNb)+1;
                    heart.classList.remove("fa_custom");
                    heart.classList.remove("far");
                    heart.classList.add("fas");
                    heart.classList.add("fa_full");
                    heart.classList.add("fa_full_animation");
                    totalLikes();
                } else {
                    heart.previousElementSibling.innerHTML = parseInt(likeNb)-1;
                    heart.classList.remove("fa_full_animation")
                    heart.classList.remove("fa_full");
                    heart.classList.remove("fas");
                    heart.classList.add("far");
                    heart.classList.add("fa_custom");
                    totalLikes();
                }
            });
        });
    }