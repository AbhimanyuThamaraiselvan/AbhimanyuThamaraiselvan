// Fetch data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Display country information in the console
    data.forEach((country, index) => {
      const name = country.name.common;
      const region = country.region;
      const subregion = country.subregion;
      const population = country.population;

      console.log(`Country ${index + 1}:
        Name: ${name}
        Region: ${region}
        Subregion: ${subregion}
        Population: ${population}`);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
