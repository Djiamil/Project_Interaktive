<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $errors = [];


    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    if (empty($username)) {
        $errors[] = "Le champ nom d'utilisateur est requis.";
    }

    if (empty($password)) {
        $errors[] = "Le champ mot de passe est requis.";
    } elseif (strlen($password) < 6) {
        $errors[] = "Le mot de passe doit contenir au moins 6 caractères.";
    }

    $fakeUsername = "admin";
    $fakePassword = "password123";

    if (empty($errors)) {
        if ($username === $fakeUsername && $password === $fakePassword) {
            header("Location: login.php?message=Connexion réussie !");
            exit();
        } else {
            $errors[] = "Nom d'utilisateur ou mot de passe incorrect.";
        }
    }

    if (!empty($errors)) {
        $errorString = implode(';', $errors); 
        header("Location: login.php?error=" . urlencode($errorString));
        exit();
    }
}
?>