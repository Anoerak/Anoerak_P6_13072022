class FormModalTemplate {
    constructor(data) {
        this.datas = data;
    }

    createForm() {
        const form = `
            <div class="modal">
                <header>
                    <div class="message">
                        <h4>Contactez-moi</h4>
                        <img src="assets/icons/close.svg" class="close_form_modal" aria-label="Icône cliquable croix pour fermeture de la modale"/>
                    </div>
                    <span class="artist_name" aria-label="Nom de l'artiste"></span>
                </header>
                <form method="post" action="" method="POST" onsubmit="return false" role="form" aria-label="formulaire de contact" tabindex="0">
                    <div>
                        <label for="firstname" tabindex="0">Prénom</label>
                            <input id="firstname" type="text" name="firstname" minlength="2"  tabindex="0" required/>
                        <label for="name" tabindex="0">Nom</label>
                            <input id="name" type="text" name="name" minlength="2"  tabindex="1"required/>
                        <label for"email" tabindex="0">Email</label>
                            <input id="email" type="email" name="email"  tabindex="0" required/>
                        <label for="message" tabindex="0">Votre message</label>
                            <textarea id="message" maxlength="255" name="message" placeholder="Saisir votre message ici..."  tabindex="0" required></textarea>
                    </div>
                    <button class="contact_button submit_button" type="submit" aria-label="Cliquer pour envoyer votre message" tabindex="0">Envoyer</button>
                </form>
            </div>
        `;

        this.$modalWrapper = document.getElementById("contact_modal");
        this.$modalWrapper.innerHTML = form;
        
        document.querySelector(".artist_name").innerHTML = this.datas.name;

        this.$modalWrapper.style.display = "flex";
    }
}