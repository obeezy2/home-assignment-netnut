// Display exchange rate data
function displayData(dataCollection) {

    // Get data fields from response
    let exchangeCurrency = dataCollection.base;
    let exchangeData = dataCollection.rates;
    let exchangeDate = dataCollection.date;
    let timestamp = dataCollection.timestamp;

    // Convert timestamp to date/time string
    const date = new Date(timestamp * 1000);
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const timeString = `${hour}:${minutes < 10 ? '0' + minutes : minutes} (Time Zone: ${timeZone})`;

    // Get specific exchange rate
    const ILS = exchangeData["ILS"];

    // Validate data
    if (Object.keys(exchangeData).length === 0 ||
        ILS == undefined ||
        dataCollection == null) {

        console.log("No data available for display.");
        return;
    }

    // Create elements to display data
    const dataDiv = document.createElement('div');
    dataDiv.className = "exchange-data";

    const tableBody = document.getElementById("exchangeEuro");
    const row = document.createElement('tr');

    const currencyCell = document.createElement('td');
    const rateCell = document.createElement('td');
    const timeCell = document.createElement('td');
    const dateCell = document.createElement('td');

    // Set cell values
    currencyCell.innerText = exchangeCurrency;
    rateCell.innerText = ILS;
    timeCell.innerText = timeString;
    dateCell.innerText = exchangeDate;

    // Add cells to row
    row.appendChild(currencyCell);
    row.appendChild(rateCell);
    row.appendChild(timeCell);
    row.appendChild(dateCell);

    // Add row to table
    tableBody.appendChild(row);
}