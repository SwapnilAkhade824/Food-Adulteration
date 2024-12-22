document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
    const ratingText = document.getElementById("rating-text");

    let currentRating = 0;

    stars.forEach((star, index) => {
        // Highlight stars on hover
        star.addEventListener("mouseover", () => {
            highlightStars(index);
        });

        // Remove highlight when leaving the star container
        star.addEventListener("mouseout", () => {
            highlightStars(currentRating - 1); // Reset to current rating
        });

        // Set rating when clicking
        star.addEventListener("click", () => {
            currentRating = index + 1; // Store the rating
            ratingText.textContent = `You rated ${currentRating} star${currentRating > 1 ? "s" : ""}.`;
        });
    });

    // Highlight stars function
    function highlightStars(maxIndex) {
        stars.forEach((star, i) => {
            if (i <= maxIndex) {
                star.classList.add("active");
            } else {
                star.classList.remove("active");
            }
        });
    }
});

// Story Sharing script 

document.getElementById("storyForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Initialize EmailJS with your Public Key
    emailjs.init("18I0Y9YVf6Lk0Kk9s"); // Replace with your EmailJS Public Key

    // Collect form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        story: document.getElementById("story").value,
    };

    // Send email using EmailJS
    emailjs.send("service_v462aw5", "template_vdrds4b", formData)
        .then(function (response) {
            alert("Your story has been submitted successfully!");
            console.log("SUCCESS!", response.status, response.text);
        })
        .catch(function (error) {
            alert("There was an error submitting your story. Please try again.");
            console.error("FAILED...", error);
        });
});
