document.addEventListener("DOMContentLoaded", async function () {
    const params = new URLSearchParams(window.location.search);
    const year = params.get("year");
    const pastContent = document.getElementById("pastContent");

    try {
        const response = await fetch("local_database.json");
        if (!response.ok) throw new Error("Failed to load data");
        const data = await response.json();

        if (data.years[year]) {
            pastContent.innerHTML = `
                <h2>Year: ${year}</h2>
                <p><strong>Climate:</strong> ${data.years[year].climate}</p>
                <p><strong>Oxygen Level:</strong> ${data.years[year].oxygen_level}</p>
                <p><strong>Groundwater:</strong> ${data.years[year].groundwater}</p>
                <p><strong>Government:</strong> ${data.years[year].government}</p>
                <p><strong>Discoveries:</strong> ${data.years[year].discoveries.join(", ")}</p>
            `;
        } else {
            pastContent.innerHTML = "<p>No data available for this year.</p>";
        }
    } catch (error) {
        console.error("Error loading data:", error);
        pastContent.innerHTML = "<p>Failed to load historical data. Please try again later.</p>";
    }
});
