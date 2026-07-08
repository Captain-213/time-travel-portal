document.getElementById('travelButton').addEventListener('click', function() {
    let year = document.getElementById('yearInput').value;
    let loading = document.getElementById('loading');
    let audio = document.getElementById('travelSound');
    
    if (year >= 1900 && year <= 2050) {
        audio.play(); // Start time travel sound
        loading.classList.remove('hidden'); // Show animation
        setTimeout(() => {
            let destination = year < 2025 ? 'past.html' : 'future.html';
            window.location.href = `${destination}?year=${year}`;
        }, 3000); // 3 seconds delay for loading effect
    } else {
        alert("Please enter a valid year between 1900 and 2050.");
    }
});