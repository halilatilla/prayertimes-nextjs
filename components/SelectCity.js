import React, { useState } from "react";
import SelectSubCities from "./SelectSubCities";

export default function SelectCity({ cities }) {
  const [subCities, setsubCities] = useState([]);

  function getSubCities(cityId) {
    fetch(`https://ezanvakti.herokuapp.com/ilceler?sehir=${cityId}`)
      .then(res => res.json())
      .then(subCities => {
        setsubCities(subCities);
      });
  }

  const chanceHandle = () => {
    getSubCities(event.target.value);
    const index = event.target.selectedIndex;
    localStorage.setItem("city-name", event.target[index].text);
  };

  return (
    <>
      <select onChange={() => chanceHandle()}>
        <option>Select City</option>
        {cities.map(cities => (
          <option key={cities.SehirID} value={cities.SehirID}>
            {cities.SehirAdi}
          </option>
        ))}
      </select>

      <SelectSubCities subCities={subCities} />
    </>
  );
}
