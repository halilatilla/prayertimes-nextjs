import React, { useState } from "react";
import styled from "styled-components";
import SelectCity from "./SelectCity";
import localDataCountries from "../localDataCountries.json";
const CountryContainer = styled.div`
  margin-top: 10vmin;
  height: 5vmin;
  display: grid;
  grid-column-gap: 1vmin;
  grid-template-columns: repeat(3, 1fr);
  width: 95vmin;
  justify-content: center;
  select {
    font-size: 2vmin;
    padding: 0 9px;
    background-color: #d3d3d3;
  }
  @media (max-width: 768px) {
    padding: 0 18px;
  }
`;

export default function SelectCountry() {
  const [cities, setCities] = useState([]);

  const getCities = countryId => {
    fetch(`https://ezanvakti.herokuapp.com/sehirler?ulke=${countryId}`)
      .then(res => res.json())
      .then(cities => {
        setCities(cities);
      });
  };

  const chanceHandle = () => {
    getCities(event.target.value);
  };

  return (
    <CountryContainer>
      <select onChange={() => chanceHandle()}>
        <option>Select Country</option>
        {localDataCountries.map(country => (
          <option key={country.UlkeID} value={country.UlkeID}>
            {country.UlkeAdi}
          </option>
        ))}
      </select>
      <SelectCity cities={cities} />
    </CountryContainer>
  );
}
