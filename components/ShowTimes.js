import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ShowTimesContainer = styled.div`
  position: absolute;
  top: 20vmin;
  left: 50%;
  transform: translate(-50%);
  background-color: #c345;
  font-size: 4vmin;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  grid-row-gap: 18px;
  justify-items: center;
  align-items: center;
  width: 80vmin;
  padding: 4vmin 0;
  box-shadow: 5px 5px 10px #d3d3d3;
  border-radius: 1rem;
  color: white;
  @media (max-width: 768px) {
    padding: 18px 0;
    top: 25vmin;
  }
`;

const TimesContainer = styled.div`
  width: 50vmin;
  display: grid;
  place-items: center center;
  div {
    display: flex;
    justify-content: space-between;
    width: 70%;
    border-bottom: 1px solid #c23456;
    padding: 18px 5px;
  }
`;

export default function ShowTimes({ prayerTimes }) {
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
  const { Imsak, Gunes, Ogle, Ikindi, Aksam, Yatsi, MiladiTarihUzun } = times;

  const showtimes = () => (
    <ShowTimesContainer>
      <div>
        {cityname === townname
          ? cityname + " - " + "MERKEZ"
          : cityname + " - " + townname}
      </div>

      <div>{MiladiTarihUzun}</div>
      <div>{hour}</div>
      <TimesContainer>
        <div>
          İmsak <span>{Imsak}</span>
        </div>

        <div>
          Güneş <span>{Gunes}</span>
        </div>

        <div>
          Öğle <span>{Ogle}</span>
        </div>
        <div>
          İkindi <span>{Ikindi}</span>
        </div>

        <div>
          Aksam <span>{Aksam}</span>
        </div>

        <div>
          Yatsı <span>{Yatsi}</span>
        </div>
      </TimesContainer>
    </ShowTimesContainer>
  );

  return <>{times ? showtimes() : <div> seçim yap</div>}</>;
}
