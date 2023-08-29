function displayData(data) {
    const { base, rates, date, timestamp } = data;

    if (!base || !rates || rates["ILS"] === undefined) {
        console.error("No data available for display.");
        return;
    }

    const localDate = new Date(timestamp * 1000);
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const formattedTime = formatTime(localDate);

    appendRowToTable(base, rates["ILS"], date, formattedTime);
}

function formatTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
}

function appendRowToTable(base, rate, date, time) {
    const tableBody = document.getElementById("exchangeEuro");

    const row = document.createElement('tr');
    ["td", "td", "td", "td"].forEach((_, index) => {
        const cell = document.createElement('td');
        cell.innerText = [base, rate, time, date][index];
        row.appendChild(cell);
    });

    tableBody.appendChild(row);
}
