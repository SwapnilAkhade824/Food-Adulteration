<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $author = htmlspecialchars($_POST['author']);
    $email = htmlspecialchars($_POST['email']);
    $story = htmlspecialchars($_POST['story']);
    
    $to = "csteamimperials@gmail.com";  // Your email address
    $subject = "New Story Submission from $author";
    $message = "
        Name: $author\n
        Email: $email\n
        Story: $story
    ";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for sharing your story!";
    } else {
        echo "There was an issue sending your story. Please try again.";
    }
}
?>
