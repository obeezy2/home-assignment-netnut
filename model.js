// Define API key and URL
const APIKEY = 'fdf42c920ed60eb207c0f7cc84f5dcbb';
const URL = `http://api.exchangeratesapi.io/v1/latest?access_key=${APIKEY}`;

// Initialize fetch counter
let count = 0;

// Asynchronous function to fetch exchange rate data
async function fetchData() {
    try {
        // Make the API call
        const response = await fetch(URL);

        // Parse the JSON response
        const data = await response.json();

        // Check if the API call was successful
        if (response.ok) {
            // Pass the data to the displayData function
            displayData(data);

            // Increment the fetch counter
            count++;
        } else {
            // Log an error if the API call failed
            console.error("Error fetching data:", data.error);
        }

        // Stop fetching after 24 successful calls
        if (count >= 24) {
            clearInterval(intervalId);
        }
    } catch (error) {
        // Log any fetch errors
        console.error('Fetch error:', error);
    }
}

// Set an interval to fetch data every 360000 ms (1 hour)
const intervalId = setInterval(fetchData, 360000);

// Make an initial fetch when the script runs
fetchData();