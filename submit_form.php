<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $author = $_POST['author'];
    $email = $_POST['email'];
    $story = $_POST['story'];

    // Define the recipient email
    $to = "csteamimperials@gmail.com"; // Replace with your email address
    $subject = "New Story Submission from $author";
    
    // Construct the email body
    $message = "
    New Story Submitted:

    Name: $author
    Email: $email

    Story:
    $story
    ";
    
    // Additional headers
    $headers = "From: no-reply@yourdomain.com"; // Set this to your domain email

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Your story has been successfully submitted!";
    } else {
        echo "There was an error submitting your story. Please try again.";
    }
}
?>
