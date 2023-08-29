const APIKEY = '2274382c58b50619bfc656928b96c3b9';
const URL = `http://api.exchangeratesapi.io/v1/latest?access_key=${APIKEY}`;

let count = 0;

async function fetchData() {
    try {
        const response = await fetch(URL);
        const data = await response.json();

        if (response.ok) {
            displayData(data);
            count++;
        } else {
            console.error("Error fetching data:", data.error);
        }

        if (count >= 24) {
            clearInterval(intervalId);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

const intervalId = setInterval(fetchData, 10000);  // 3600000 ms = 1 hour
fetchData();  // Initial fetch