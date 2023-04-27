import { useState } from "react";

const countries = [
  {
    name: "USA",
    cities: ["New York", "Los Angeles", "Chicago"]
  },
  {
    name: "Canada",
    cities: ["Toronto", "Vancouver", "Montreal"]
  },
  {
    name: "UK",
    cities: ["London", "Manchester", "Birmingham"]
  }
];

function CandidateDetails() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const updateCities = countryName => {
    const country = countries.find(c => c.name === countryName);
    setCities(country.cities);
  };

  return (
    <div>
      <select
        value={selectedCountry}
        onChange={e => {
          setSelectedCountry(e.target.value);
          updateCities(e.target.value);
        }}
      >
        <option value="">Select a country</option>
        {countries.map((country, index) =>
          <option key={index} value={country.name}>
            {country.name}
          </option>
        )}
      </select>

      <select
        value={selectedCity}
        onChange={e => setSelectedCity(e.target.value)}
      >
        <option value="">Select a city</option>
        {cities.map((city, index) =>
          <option key={index} value={city}>
            {city}
          </option>
        )}
      </select>
    </div>
  );
}

export default CandidateDetails;
