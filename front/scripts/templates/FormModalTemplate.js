class FormModalTemplate {
    constructor(data) {
        this.datas = data;
    }

    createForm() {
        const form = `
            <div class="modal">
                <header>
                    <div class="message">
                        <h2>Contactez-moi</h2>
                        <img src="assets/icons/close.svg" class="close_form_modal" />
                    </div>
                    <span class="artist_name"></span>
                </header>
                <form method="post" action="" method="POST" onsubmit="return false" role="form" aria-lable="formulaire de contact">
                    <div>
                        <label for="firstname">Prénom</label>
                            <input id="firstname" type="text" name="firstname" minlength="2" required/>
                        <label for="name">Nom</label>
                            <input id="name" type="text" name="name" minlength="2" required/>
                        <label for"email">Email</label>
                            <input id="email" type="email" name="email" required/>
                        <label for="message">Votre message</label>
                            <textarea id="message" maxlength="255" name="message" placeholder="Saisir votre message ici..." required></textarea>
                    </div>
                    <button class="contact_button submit_button" type="submit">Envoyer</button>
                </form>
            </div>
        `;

        this.$modalWrapper = document.getElementById("contact_modal");
        this.$modalWrapper.innerHTML = form;
        
        document.querySelector(".artist_name").innerHTML = this.datas.name;

        this.$modalWrapper.style.display = "flex";
    }
}