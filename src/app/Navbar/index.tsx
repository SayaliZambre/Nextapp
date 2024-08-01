"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";

function Index() {
  return (
    <Div>
      <Div2>
        <Div3>
          <Image
            loading="lazy"
            src="/Icon.png" // Path to your image in the public folder
            alt="WhatBytes"
            width={48}
            height={48}
          />
          <Div4>WhatBytes</Div4>
        </Div3>
      </Div2>
      <Div7>
        <Div5>
          <Profile />
          <Pro>Rahil Siddique</Pro>
        </Div5>
      </Div7>
      <GreyLine /> {/* Add the grey line here */}
    </Div>
  );
}

const Profile = styled.div`
  background-color: rgba(217, 217, 217, 1);
  border-radius: 50%;
  margin-top: 5px;
  width: 25px; /* Reduced size */
  height: 25px; /* Reduced size */
  border: 2px solid rgba(0, 0, 0, 1);
`;

const Pro = styled.div`
  font-family: Inter, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add box shadow */
`;

const Div = styled.div`
  background-color: #ffffff;
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: space-between;
  padding: 1px 19px 21px;
  flex-wrap: wrap; /* Ensures wrapping for mobile view */
`;

const Div2 = styled.div`
  display: flex;
  align-items: start;
  gap: 20px;
  font-size: 32px;
  color: #000000;
  justify-content: space-between;
  flex-wrap: wrap; /* Ensures wrapping for mobile view */
`;

const Div3 = styled.div`
  display: flex;
  margin-top: 10px;
  font-weight: 600;
  letter-spacing: 1px;
`;

const Div4 = styled.div`
  font-family: Poppins, sans-serif;
  margin: auto 0;
`;

const Div5 = styled.div`
  border-radius: 10px;
  display: flex;
  margin-top: 9px;
  align-items: start;
  margin-right: 4rem;
  gap: 1px;
  font-weight: 500;
  white-space: nowrap;
  border: 2px solid #f0e8e8;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div6 = styled.div`
  font-family: Poppins, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const Div7 = styled.div`
  align-self: start;
  display: flex;
  margin-top: 7px;
  align-items: start;
  gap: 10px;
`;

const GreyLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d3d3d3; /* Light grey color */
  margin-top: 10px; /* Space above the line */
`;

export default Index;
