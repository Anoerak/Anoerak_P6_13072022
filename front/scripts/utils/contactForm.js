// Displays the Message Modal
    function displayModal() {
        const modal = document.getElementById("contact_modal");
        modal.style.display = "flex";
    }

// Close the Message Modal
    function closeModal() {
        const modal = document.getElementById("contact_modal");
        modal.style.display = "none";
    }

// Displays Name of Artist in Message Modal
    function displayNameModal (x,id) {
        const photographer = x.photographers.find(photographer => photographer.id == id);
        document.querySelector(".artist_name").innerHTML = photographer.name;
    }

// Displays all the Inputs in the Console on Send Action
    function sendMessage () {
        const visitorFirstname = document.getElementById("firstname").value;
        const visitorName = document.getElementById("name").value;
        const visitorEmail = document.getElementById("email").value;
        const visitorMessage = document.getElementById("message").value;
        const data = {
            firstname : visitorFirstname,
            name: visitorName,
            email: visitorEmail,
            message: visitorMessage
        };
        console.log(data);
        return false;
    }