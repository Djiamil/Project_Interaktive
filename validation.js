document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const name = document.getElementById("name");
        const prenom = document.getElementById("prenom");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        clearErrors();

        let hasError = false;

        if (name.value.trim() === "") {
            showError("nameError", "Le nom est obligatoire.");
            hasError = true;
        }

        if (prenom.value.trim() === "") {
            showError("prenomError", "Le prénom est obligatoire.");
            hasError = true;
    }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === "") {
            showError("emailError", "L'email est obligatoire.");
            hasError = true;
        } else if (!emailRegex.test(email.value.trim())) {
            showError("emailError", "L'email n'est pas valide.");
            hasError = true;
        }

        if (message.value.trim() === "") {
            showError("messageError", "Le message est obligatoire.");
            hasError = true;
        }

        if (!hasError) {
            form.submit();
        }
    });

    function showError(id, message) {
        const errorElement = document.getElementById(id);
        if (errorElement) {
            errorElement.textContent = message;
            
            setTimeout(() => {
                errorElement.textContent = ""; 
            }, 2000); 
        }   
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach((error) => {
            error.textContent = "";
        });
    }
});