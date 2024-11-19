<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $errors = [];

    if (empty($_POST['name'])) {
        $errors[] = 'Le champ nom est requis.';
    }

    if (empty($_POST['prenom'])) {
        $errors[] = 'Le champ prénom est requis.';
    }

    if (empty($_POST['email'])) {
        $errors[] = 'Le champ email est requis.';
    } elseif (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'L\'email est invalide.';
    }

    if (empty($_POST['message'])) {
        $errors[] = 'Le champ message est requis.';
    }

    if (empty($errors)) {
        header("Location: form.php?message=Formulaire envoyé avec succès.");
        exit();
    } else {
        $errorString = implode(';', $errors); 
        header("Location: form.php?error=" . urlencode($errorString));
        exit();
    }
}
?>
