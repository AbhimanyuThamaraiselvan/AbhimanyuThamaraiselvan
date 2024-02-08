// Fetch data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Extract country flags from the API response
    const flags = data.map(country => country.flags[0]);

    // Display country flags in the console
    flags.forEach((flag, index) => {
      console.log(`Country ${index + 1} Flag: ${flag}`);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
