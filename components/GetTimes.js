import React, { useState, useEffect } from "react";
import ShowTimes from "./ShowTimes";

export default function GetTimes({ prayerTimes }) {
  const [times, setTimes] = useState([]);
  const [cityname, setCityname] = useState("");
  const [townname, setTownname] = useState("");
  const [hour, setHour] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setHour(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const dateNow = new Date().toLocaleDateString();
    const allTimes = JSON.parse(localStorage.getItem("local-prayer-times"));
    const newTime = allTimes.filter(time => time.MiladiTarihKisa === dateNow);

    setTimes(...newTime);
    setCityname(localStorage.getItem("city-name"));
    setTownname(localStorage.getItem("town-name"));
  }, [prayerTimes]);

  return (
    <ShowTimes
      times={times}
      cityname={cityname}
      townname={townname}
      hour={hour}
    />
  );
}
