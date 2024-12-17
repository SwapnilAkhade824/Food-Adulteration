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
