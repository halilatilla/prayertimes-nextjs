import React from "react";
import Head from "next/head";
import SelectCountry from "../components/SelectCountry";

const Home = () => (
  <>
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
          text-align: center;
          background-color: palevioletred;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: "Source Sans Regular", sans-serif;
          box-sizing: border-box;
        }
      `}
    </style>
  </>
);

export default Home;
