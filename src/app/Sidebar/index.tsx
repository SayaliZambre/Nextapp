"use client";
import React from 'react';
import Image from "next/image";
import styled from 'styled-components';

import { useRouter } from 'next/navigation';

const Index = () => {
  const router = useRouter();

  const handleUpdate = () => {
    router.push('/Popup'); 
  };

  return (
    <Main>
      <Container>
        <Div>
          <Div2>
            <Div3>+</Div3>
            <Div4>DashBoard</Div4>
          </Div2>
          <Div5>
            <Div6>+</Div6>
            <Div7>Skills Test</Div7>
          </Div5>
          <Div8>
            <Div9>+</Div9>
            <Div10>Internship</Div10>
          </Div8>
        </Div>
        <Line />
      </Container>
      <Container2>
        <Title>Skill Test</Title>
        <MainSection>
          <HeaderSection>
            <Image
              loading="lazy"
              src="/HTML5-wow.webp"
              alt="WhatBytes"
              width={48}
              height={70}
            />
            <TextContainer>
              <MainTitle>Hyper Text Makeup Language</MainTitle>
              <Subtitle>Question: 08 | Duration: 15mins Submitted on 5 June 2021</Subtitle>
            </TextContainer>
            <UpdateButton onClick={() => router.push('./Popup')}>Update</UpdateButton>
          </HeaderSection>
        </MainSection>
        <ContentSection>
          <LeftColumn>
            <ItemGroup>
              <Item>
                <ItemDetails>
                  <ItemHeader>
                    <ItemTitle>Quick Static</ItemTitle>
                    <Item>
                      <Image
                        loading="lazy"
                        src="/circle.png"
                        alt="WhatBytes"
                        width={48}
                        height={70}
                      />  
                      <SubItemDetails>
                        <SubItemNumber>1</SubItemNumber>
                        <SubItemName>YOURRANK</SubItemName>
                      </SubItemDetails>
                    </Item>
                  </ItemHeader>
                  <Separator />
                </ItemDetails>
                <SubItem>
                  <Image
                    loading="lazy"
                    src="/circle.png"
                    alt="WhatBytes"
                    width={48}
                    height={70}
                  />  
                  <SubItemDetails>
                    <SubItemNumber>30%</SubItemNumber>
                    <SubItemName>PERCENTILE</SubItemName>
                  </SubItemDetails>
                  <Separator />
                  <Image
                    loading="lazy"
                    src="/circle.png"
                    alt="WhatBytes"
                    width={48}
                    height={70}
                  />  
                  <SubItemDetails>
                    <SubItemNumber>10/15</SubItemNumber>
                    <SubItemName>CORRECTANSWER</SubItemName>
                  </SubItemDetails>
                </SubItem>
              </Item>
            </ItemGroup>
          </LeftColumn>
        </ContentSection>
        <GraphSection>
          <GraphContainer>
            <GraphTitle>Comprehensive Graph</GraphTitle>
            <GraphDescription>
              <Image
                loading="lazy"
                src="/circle.png"
                alt="WhatBytes"
                width={58}
                height={58}
              /> 
            </GraphDescription>
          </GraphContainer>
          <GraphIcon>
            <First> You Scored 30% percentile which is lower than the </First>
            <Second>average percentile 72% of all the engineers who took this assessment</Second> 
          </GraphIcon>
          <GraphBackground>
            <Image
              loading="lazy"
              src="/line-graph.webp"
              alt="WhatBytes"
              width={510}
              height={250}
            /> 
          </GraphBackground>
        </GraphSection>
      </Container2>
      <Right>
        <Container3>
          <Header>Syllabus Wise Analysis</Header>
          <Content>HTML Tools, Forms, History</Content>
          <Dot1 />
          <Content>Tags & References in HTML</Content>
          <Dot2 />
          <Content>Tables & References in HTML</Content>
          <Dot3 />
          <Content>Tables & CSS Basics</Content>
          <Progress>
            <ProgressBar />
            <ProgressPercentage>90%</ProgressPercentage>
          </Progress>
        </Container3>
        <Container4>
          <Title1>Question Analysis</Title1>
          <Content1>You scored 10 questions correct out of 15. However, it still needs some improvements</Content1>
        </Container4>
      </Right>
    </Main>
  );
};

const Right = styled.div`
  flex-direction: row;
`;

const Main = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: flex-start;
`;

const First = styled.div`
  
`;
const Second = styled.div`
  /* margin-top: 1rem; */
`;

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 4%; /* Adjust as needed */
  margin-right: 0rem; /* Space between the two containers */
`;

const Div = styled.div`
  align-self: start;
  display: flex;
  margin-left: 2rem;
  margin-top: 2rem;
  flex-direction: column;
  color: rgba(128, 128, 128, 1);
  font-weight: 700;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div2 = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;

const Div3 = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Div4 = styled.div`
  flex-grow: 1;
  flex-basis: auto;
  font-size: 18px;
  font-weight: bold;
`;

const Div5 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 39px;
  gap: 13px;
  color: rgba(0, 0, 255, 1);
  @media (max-width: 991px) {
    margin-right: 8px;
  }
`;

const Div6 = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Div7 = styled.div`
  flex-grow: 1;
  flex-basis: auto;
  font-size: 18px;
  font-weight: bold;
`;

const Div8 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 43px;
  gap: 13px;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
    margin: 40px 8px 0 0;
  }
`;

const Div9 = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Div10 = styled.div`
  flex-grow: 1;
  flex-basis: auto;
  font-size: 18px;
  font-weight: bold;
`;

const Line = styled.div`
  width: 1px;
  height: 60rem;
  background-color: #aeadad;
  position: absolute;
  left: calc(2rem + 2px);
  /* margin-bottom: 3rem; */
  top: 0;
  margin-left: 10rem;
  bottom: 0;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%; /* Adjust as needed */
  margin-top: 10px;
  margin-left: 13rem;
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 40px;
  }
`;

const Title = styled.div`
  color: #646363;
  font: 600 18px Inter, sans-serif;
`;

const MainSection = styled.div`
  border-radius: 9px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  margin-top: 25px;
  width: 100%;
  align-items: start;
  gap: 20px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  justify-content: space-between;
  padding: 5px 17px 25px;
  border: 1px solid rgba(128, 128, 128, 1);
  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  gap: 9px;
  width: 40px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const IconContainer = styled.div`
  background-color: rgba(217, 217, 217, 1);
  width: 88px;
  height: 58px;
  border: 1px solid rgba(0, 0, 0, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const TextContainer = styled.div`
  align-self: start;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const MainTitle = styled.div`
  font-family: Inter, sans-serif;
  color: rgba(0, 0, 0, 1);
`;

const Subtitle = styled.div`
  font-family: Inter, sans-serif;
  color: rgba(128, 128, 128, 1);
  margin-top: 8px;
`;

const UpdateButton = styled.div`
  font-family: Inter, sans-serif;
  border-radius: 5px;
  margin-left: 2.5rem;
  background-color: #060654;
  color: rgba(255, 255, 255, 1);
  padding: 11px 23px;
  border: 1px solid rgba(0, 0, 0, 1);
  margin-top: 9px;
  align-self: flex-start; /* Align button to the left side */
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;
const ContentSection = styled.div`
  border-radius: 9px;
  background-color: rgba(255, 255, 255, 1);
  margin-top: 25px;
  width: 100%;
  padding: 0 20px 17px;
  border:2px solid #aeaeae;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const LeftColumn = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const ItemGroup = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 69%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Item = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 8px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ItemDetails = styled.div`
  display: flex;
  gap: 2px;
  margin-top: 1rem;
  margin-left: 1rem;
  color: rgba(0, 0, 0, 1);
`;

const ItemHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.div`
  font-size: 15px;
  font-weight: 900;
  font-family: Inter, sans-serif;
`;

const ItemStats = styled.div`
  display: flex;
  margin-top: 19px;
  align-items: start;
  gap: 17px;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const StatIndicator = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  width: 27px;
  height: 32px;
  border: 1px solid rgba(0, 0, 0, 1);
`;

const StatNumber = styled.div`
  font-family: Inter, sans-serif;
`;

const ItemName = styled.div`
  font-family: Inter, sans-serif;
  color: rgba(128, 128, 128, 1);
  align-self: center;
`;

const Separator = styled.div`
  align-self: end;
  /* margin-top: 29px; */
  width: 1px;
  height: 55px;
  /* border: 1px solid rgba(128, 128, 128, 0.5); */
  background-color: rgba(128, 128, 128, 0.5);
`;

const SubItem = styled.div`
  align-self: end;
  display: flex;
  margin-top: 35px;
  gap: 15px;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const SubItemIcon = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  align-self: start;
  width: 27px;
  height: 32px;
  border: 1px solid rgba(0, 0, 0, 1);
`;

const SubItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const SubItemNumber = styled.div`
  font-family: Inter, sans-serif;
  /* margin-left: 8px; */
  /* margin-bottom: 2rem; */
  margin-top: 1rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 1);
  align-self: center;
`;

const SubItemName = styled.div`
  font-family: Inter, sans-serif;
  color: rgba(128, 128, 128, 1);
  font-size: 10px;
  font-weight: 500;
  margin-top: 2px;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 31%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const GroupIcon = styled.div`
  width: 1px;
  height: 55px;
  border: 1px solid rgba(128, 128, 128, 0.5);
`;

const GroupDetails = styled.div`
  align-self: start;
  display: flex;
  margin-top: 7px;
  flex-direction: column;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const GroupNumber = styled.div`
  font-family: Inter, sans-serif;
  color: rgba(0, 0, 0, 1);
  align-self: start;
  margin-left: 11px;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const GroupName = styled.div`
  font-family: Inter, sans-serif;
  color: rgba(128, 128, 128, 1);
  margin-top: 18px;
`;

const GraphSection = styled.div`
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  margin-top: 28px;
  width: 95%;
  flex-direction: column;
  /* font-weight: 600; */
  padding: 8px 36px 37px;
  border: 2px solid #adadad;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const GraphContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 20px;
  justify-content: space-between;
`;

const GraphTitle = styled.div`
  color: rgba(0, 0, 0, 1);
  font-weight: 700;
  margin-top: 1rem;
  font: 14px 900 Inter, sans-serif;
`;

const GraphDescription = styled.div`
  color: rgba(128, 128, 128, 1);
  margin-top: 31px;
  font: 16px Inter, sans-serif;
`;

const GraphIcon = styled.div`
  /* background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  width: 50px;
  height: 59px;
  border: 1px solid rgba(0, 0, 0, 1); */
`;

const GraphBackground = styled.div`
  background-color: rgba(217, 217, 217, 1);
  margin-top: 51px;
  height: 242px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Container3 = styled.div`
  border-radius: 5px;
  background-color: #fff;
  margin-left: 5rem;
  display: flex;
  width: 500px;
  padding-left: 2rem;
  margin-top: 3.2rem;
  padding-right: 3rem;
  /* padding-top: 5rem; */
  flex-direction: column;
  /* font-size: 20px; */
  color: #808080;
  /* font-weight: 400; */
  /* padding: 9px 20px 38px; */
  border: 2px solid #c3bfbf;
`;

const Header = styled.div`
  color: #000;
  margin-top: 2rem;
  font: 700 24px Inter, sans-serif;
  @media (max-width: 991px) {
    margin-right: 10px;
  }
`;

const Content = styled.div`
  font-family: Inter, sans-serif;
  margin-top: 60px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Dot1 = styled.div`
  border-radius: 50px;
  background-color: #0000ff;
  margin-top: 10px;
  height: 12px;
`;
const Dot2 = styled.div`
  border-radius: 50px;
  background-color: #ff6600;
  margin-top: 10px;
  height: 12px;
`;
const Dot3 = styled.div`
  border-radius: 50px;
  background-color: #ff0000;
  margin-top: 10px;
  height: 12px;
`;
const Dot4 = styled.div`
  border-radius: 50px;
  background-color: #39c517;
  margin-top: 10px;
  height: 12px;
`;

const Progress = styled.div`
  display: flex;
  margin-top: 7px;
  gap: 20px;
  color: #0000ff;
  white-space: nowrap;
  margin-bottom: 2rem;
  justify-content: space-between;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const ProgressBar = styled.div`
  border-radius: 50px;
  background-color: #39c517;  align-self: start;
  width: 227px;
  height: 12px;
`;

const ProgressPercentage = styled.div`
  font-family: Inter, sans-serif;
  color: #39c517;
`;

const Container4 = styled.div`
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  width: 500;
  margin-top: 50px;
  flex-direction: column;
  align-items: start;
  margin-left: 5rem;
  padding: 33px 65px 80px 17px;
  border: 2px solid #b4b3b3;
  @media (max-width: 991px) {
    padding-right: 20px;
    margin-top: 40px;
  }
`;

const Title1 = styled.div`
  color: rgba(0, 0, 0, 1);
  font: 700 24px Inter, sans-serif;
`;

const Content1 = styled.div`
  color: rgba(128, 128, 128, 1);
  margin: 33px 0 26px;
  font: 400 16px Inter, sans-serif;
`;


export default Index;
