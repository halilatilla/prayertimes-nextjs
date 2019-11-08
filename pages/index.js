import React from "react";
import Head from "next/head";
import SelectCountry from "../components/SelectCountry";
import styled from "styled-components";

const IndexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Home = () => (
  <IndexContainer>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Prayer Times</title>
    </Head>
    <SelectCountry />
    <style jsx global>
      {`
        html,
        body {
          padding: 0;
          margin: 0;
          background-color: palevioletred;
          font-family: "Source Sans Regular", sans-serif;
          box-sizing: border-box;
        }
      `}
    </style>
  </IndexContainer>
);

export default Home;
