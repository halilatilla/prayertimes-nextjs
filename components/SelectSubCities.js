import React, { useState, useEffect } from "react";
import ShowTimes from "./ShowTimes";

export default function SelectSubCities({ subCities }) {
  const [prayerTimes, setPrayertimes] = useState("");
  const [localStLength, setlocalStLength] = useState();

  function getPrayerTimes(subcityId) {
    fetch(`https://ezanvakti.herokuapp.com/vakitler?ilce=${subcityId}`)
      .then(res => res.json())
      .then(prayerTimes => {
        localStorage.setItem("local-prayer-times", JSON.stringify(prayerTimes));
        setPrayertimes({
          prayerTimes
        });
      });
  }

  useEffect(() => {
    const localStorageLength = localStorage.length;
    setlocalStLength(localStorageLength);
  }, [prayerTimes]);

  const chanceHandle = () => {
    getPrayerTimes(event.target.value);
    const index = event.target.selectedIndex;
    localStorage.setItem("town-name", event.target[index].text);
    localStorage.setItem("local-id", event.target.value);
  };
  return (
    <>
      <select onChange={() => chanceHandle()}>
        <option>Select SubCity</option>

        {subCities.map(subCities => (
          <option key={subCities.IlceID} value={subCities.IlceID}>
            {subCities.IlceAdi}
          </option>
        ))}
      </select>
      {localStLength > 0 ? (
        <ShowTimes prayerTimes={prayerTimes} />
      ) : (
        <div>seçim yap</div>
      )}
    </>
  );
}
