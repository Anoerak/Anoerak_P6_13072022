class ContactForm {
    constructor (data) {
        this._data = data;
        this.$modalCaller = document.querySelector(".contact_button");
        this.$modalWrapper = document.getElementById("contact_modal");
        
        this.contactFormTemplate = new FormModalTemplate(this._data);
    }

    closeModal() {
        this.$closeModalWrapper = document.querySelector(".close_form_modal");
        this.$closeModalWrapper.addEventListener("click", () => {
            this.$modalWrapper.style.display = "none";
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
            }
        );
    }

    render() {
        this.$modalCaller.addEventListener("click", () => {
            this.contactFormTemplate.createForm();
            this.onSubmitForm();
            this.closeModal();
        });
    }
}