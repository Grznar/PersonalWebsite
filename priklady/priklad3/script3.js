const button = document.getElementById("btn");
const alertBox = document.getElementById("alertBox");

function showAlert(message) {
    alertBox.textContent = message;
    alertBox.classList.remove("hidden");
    alertBox.classList.add("visible");
    setTimeout(() => {
        alertBox.classList.remove("visible");
        alertBox.classList.add("hidden");
    }, 5000);
}

function validateName() {
    const name = document.getElementById("ffname").value.trim();
    const nameRegex = /^[A-Za-zÁ-Žá-ž\s]+$/;
    if (!name) {
        showAlert("Nevyplňil jsi jméno!");
        return false;
    } else if (!nameRegex.test(name)) {
        showAlert("Ve jméně použij jenom písmena, nejsi dítě Elona Muska");
        return false;
    }
    return true;
}

function validateSurname() {
    const surname = document.getElementById("fsname").value.trim();
    const surnameRegex = /^[A-Za-zÁ-Žá-ž\s]+$/;
    if (!surname) {
        showAlert("Nevyplňil jsi příjmení!");
        return false;
    } else if (!surnameRegex.test(surname)) {
        showAlert("Ve příjmení použij jenom písmena, nejsi dítě Elona Muska");
        return false;
    }
    return true;
}

function validateEmail() {
    const email = document.getElementById("femail").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        showAlert("Nevyplňil jsi email!");
        return false;
    } else if (!emailRegex.test(email)) {
        showAlert("Zadej spravný formát emailu");
        return false;
    }
    return true;
}

function validatePhone() {
    const phone = document.getElementById("fphone").value.trim();
    const phoneRegex = /^(\+?\d{1,3})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{3,4}$/;
    if (!phone) {
        showAlert("Nevyplňil jsi telefon!");
        return false;
    } else if (!phoneRegex.test(phone) || phone.replace(/\D/g, "").length < 9) {
        showAlert("Zadej spravný formát telefonu s minimálně 9 číslicemi.");
        return false;
    }
    return true;
}

function validateAddress() {
    const address = document.getElementById("fadres").value.trim();
    const addressRegex = /\d+/;
    if (!address) {
        showAlert("Nevyplňil jsi adresu!");
        return false;
    } else if (!addressRegex.test(address)) {
        showAlert("Adresa musí obsahovat číslo popisné.");
        return false;
    }
    return true;
}

function validateMessage() {
    const message = document.getElementById("fmes").value.trim();
    if (message.length > 255) {
        showAlert("Zpráva může mít maximálně 255 znaků.");
        return false;
    }
    return true;
}

function validateForm() {
    return validateName() && validateSurname() && validateEmail() && validatePhone() && validateAddress() && validateMessage();
}

button.addEventListener("click", () => {
    if (validateForm()) {
        showAlert("Formulář byl úspěšně odeslán!");
    }
});
