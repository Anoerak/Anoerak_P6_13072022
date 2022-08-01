class ContactForm {
    constructor (data) {
        this._data = data;
        this.$modalCaller = document.querySelector(".contact_button");
        this.$modalWrapper = document.querySelector("#contact_modal");
        this.$mainHtmlWrapper = document.querySelector("main");
        this.$headerHtmlWrapper = document.querySelector("header");
        
        this.contactFormTemplate = new FormModalTemplate(this._data);
    }

    closeModal() {
        this.$closeModalWrapper = document.querySelector(".close_form_modal");
        this.$closeModalWrapper.addEventListener("click", () => {
            this.$modalWrapper.style.display = "none";
            this.$modalWrapper.ariaHidden = "true";
            this.$headerHtmlWrapper.ariaHidden = "false";
            this.$mainHtmlWrapper.ariaHidden = "false";
        });
        this.$closeModalWrapper.addEventListener("keyup", (e) => {
            if (e.keyCode === 27) {
                this.$modalWrapper.style.display = "none";
                this.$modalWrapper.ariaHidden = "true";
                this.$headerHtmlWrapper.ariaHidden = "false";
                this.$mainHtmlWrapper.ariaHidden = "false";                
            }
        });
    }

    onSubmitForm() {
        this.$submitModalForm = document.querySelector(".submit_button");
        this.$submitModalForm
            .addEventListener("click", e => {
                e.preventDefault();

                const firstname = document.getElementById("firstname").value;
                const name = document.getElementById("name").value;
                const email = document.getElementById("email").value;
                const message = document.getElementById("message").value;

                const data = {
                    firstname: firstname,
                    name: name,
                    email: email,
                    message: message
                };
                
                console.log(data);
                this.closeModal();
                return false;
            });
    }   

    render() {
        this.$modalCaller.addEventListener("click", () => {
            this.contactFormTemplate.createForm();
            this.$mainHtmlWrapper.ariaHidden = "true";
            this.$headerHtmlWrapper.ariaHidden = "true";
            this.$modalWrapper.ariaHidden = "false";
            this.onSubmitForm();
            this.closeModal();
        });
    }
}