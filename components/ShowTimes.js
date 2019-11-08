import React from "react";
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
`;

const CurrentTime = styled.div`
  background-color: ${props => props.active && "red"};
  display: flex;
  justify-content: space-between;
  width: 70%;
  border-bottom: 1px solid #c23456;
  padding: 18px 5px;
`;
export default function ShowTimes({ times, hour, cityname, townname }) {
  const { Imsak, Gunes, Ogle, Ikindi, Aksam, Yatsi, MiladiTarihUzun } = times;
  return (
    <ShowTimesContainer>
      <div>
        {cityname === townname
          ? cityname + " - " + "MERKEZ"
          : cityname + " - " + townname}
      </div>

      <div>{MiladiTarihUzun}</div>
      <div>{hour}</div>
      <TimesContainer>
        <CurrentTime active>
          İmsak <span>{Imsak}</span>
        </CurrentTime>

        <CurrentTime>
          Güneş <span>{Gunes}</span>
        </CurrentTime>

        <CurrentTime>
          Öğle <span>{Ogle}</span>
        </CurrentTime>
        <CurrentTime>
          İkindi <span>{Ikindi}</span>
        </CurrentTime>

        <CurrentTime>
          Aksam <span>{Aksam}</span>
        </CurrentTime>

        <CurrentTime>
          Yatsı <span>{Yatsi}</span>
        </CurrentTime>
      </TimesContainer>
    </ShowTimesContainer>
  );
}
