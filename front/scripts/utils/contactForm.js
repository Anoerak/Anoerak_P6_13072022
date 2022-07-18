function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function displayNameModal (x,id) {
    const photographer = x.photographers.find(photographer => photographer.id == id);
    document.querySelector(".artist_name").innerHTML = photographer.name;
}

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

document.getElementById("send_message").addEventListener("click", function () {
    sendMessage();
    return false;
});