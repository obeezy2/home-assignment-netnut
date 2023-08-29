// Function to display exchange rate data
function displayData(data) {
    // Destructure the data into its components
    const { base, rates, date, timestamp } = data;

    // Check for missing or invalid data
    if (!base || !rates || rates["ILS"] === undefined) {
        console.error("No data available for display.");
        return;
    }

    // Convert the timestamp to a JavaScript Date object
    const localDate = new Date(timestamp * 1000);

    // Get the time zone of the local system
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Format the time
    const formattedTime = formatTime(localDate);

    // Append a new row to the table
    appendRowToTable(base, rates["ILS"], date, formattedTime);
}

// Function to format a JavaScript Date object as a time string
function formatTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
}

// Function to append a new row to the exchange rate table
function appendRowToTable(base, rate, date, time) {
    const tableBody = document.getElementById("exchangeEuro");

    const row = document.createElement('tr');

    // Create and append cells for currency, rate, time, and date
    ["td", "td", "td", "td"].forEach((_, index) => {
        const cell = document.createElement('td');
        cell.innerText = [base, rate, time, date][index];
        row.appendChild(cell);
    });

    // Append the completed row to the table
    tableBody.appendChild(row);
}
