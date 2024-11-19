document.getElementById("loginForm").addEventListener("submit", function (e) {
    // Réinitialiser les messages d'erreur
    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    let hasErrors = false;

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validation du champ "Nom d'utilisateur"
    if (username === "") {
        document.getElementById("usernameError").textContent = "Le champ nom d'utilisateur est requis.";
        hasErrors = true;
    }

    // Validation du champ "Mot de passe"
    if (password === "") {
        document.getElementById("passwordError").textContent = "Le champ mot de passe est requis.";
        hasErrors = true;
    } else if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Le mot de passe doit contenir au moins 6 caractères.";
        hasErrors = true;
    }

    // Empêcher l'envoi si des erreurs sont présentes
    if (hasErrors) {
        e.preventDefault();
    }
});