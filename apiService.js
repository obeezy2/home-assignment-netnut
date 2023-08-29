// Define constants
const APIKEY = '2274382c58b50619bfc656928b96c3b9';
const URL = `http://api.exchangeratesapi.io/v1/latest?access_key=${APIKEY}`;

// Object to hold exchange rate data
let exchangeData = {};

// Object to hold all fetched data
let dataCollection = {};

// Variables to store data fields
let exchangeDate;
let exchangeCurrency;
let timestamp;

// Counter for fetch calls
let count = 0;

// Fetch exchange rate data from API  
const fetchData = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            // Save response to data collection
            dataCollection[count] = data;

            // Display current data
            displayData(dataCollection[count]);

            // Check if 24 fetches done
            if (count >= 23) {
                // Clear interval if 24 fetches completed
                clearInterval(intervalId);
            }
        })
        .catch(error => console.log('Error:', error));
};

// Fetch data every hour 
const intervalId = setInterval(function () {
    fetchData();
    count++;
}, 60000);

// Initial fetch
fetchData();