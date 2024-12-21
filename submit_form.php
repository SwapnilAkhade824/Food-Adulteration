<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data and sanitize inputs
    $author = htmlspecialchars($_POST['author']);
    $email = htmlspecialchars($_POST['email']);
    $story = htmlspecialchars($_POST['story']);

    // Email details
    $to = "csteamimperials@gmail.com"; // Replace with your email address
    $subject = "New Story Submission from $author";
    $message = "
        Name: $author\n
        Email: $email\n
        Story: $story
    ";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $to\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for sharing your story! Your submission was successful.";
    } else {
        // Debugging: Log errors or print a message
        error_log("Mail failed to send."); // Log the error to a server log (if enabled)
        echo "There was an issue sending your story. Please try again later.";

        // Optional: Display additional debugging info (for development purposes only)
        echo "<pre>";
        print_r(error_get_last()); // Prints the last PHP error if any
        echo "</pre>";
    }
} else {
    echo "Invalid request method.";
}
?>
