document.addEventListener("DOMContentLoaded", function() {
    const travelButton = document.getElementById("travelButton");
    const yearInput = document.getElementById("yearInput");
    const loading = document.getElementById("loading");
    const audio = document.getElementById("travelSound");

    travelButton.addEventListener("click", function() {
        const year = parseInt(yearInput.value);
        
        if (year >= 1900 && year <= 2050) {
            audio.play(); // Start time travel sound
            loading.classList.remove("hidden"); // Show animation
            
            setTimeout(() => {
                const destination = year < 2025 ? "past.html" : "future.html";
                window.location.href = `${destination}?year=${year}`;
            }, 3000); // 3 seconds delay for loading effect
        } else {
            alert("Please enter a valid year between 1900 and 2050.");
        }
    });
});
