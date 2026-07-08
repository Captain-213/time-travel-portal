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
            
            fetch("local_database.json")
                .then(response => response.json())
                .then(data => {
                    if (data[year]) {
                        displayData(data[year]);
                    } else {
                        fetchWikipediaData(year);
                    }
                })
                .catch(error => {
                    console.error("Error loading local database:", error);
                    fetchWikipediaData(year);
                });
            
            setTimeout(() => {
                const destination = year < 2025 ? "past.html" : "future.html";
                window.location.href = `${destination}?year=${year}`;
            }, 3000); // 3 seconds delay for loading effect
        } else {
            alert("Please enter a valid year between 1900 and 2050.");
        }
    });
});

function fetchWikipediaData(year) {
    let url = `https://en.wikipedia.org/api/rest_v1/page/summary/${year}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.extract) {
                displayData(data.extract);
            } else {
                displayData("No historical data found for this year.");
            }
        })
        .catch(error => {
            console.error("Error fetching Wikipedia data:", error);
            displayData("Failed to fetch data.");
        });
}

function displayData(info) {
    document.getElementById("loading").classList.add("hidden");
    alert(info); // या इसे किसी HTML element में दिखाएं
}
