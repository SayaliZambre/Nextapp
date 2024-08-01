"use client"

import * as React from "react";
import styled from "styled-components";

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Skill Test</Title>
      <MainSection>
        <HeaderSection>
          <IconContainer />
          <TextContainer>
            <MainTitle>Hyper</MainTitle>
            <Subtitle>Question</Subtitle>
          </TextContainer>
        </HeaderSection>
        <UpdateButton>Update</UpdateButton>
      </MainSection>
      <ContentSection>
        <LeftColumn>
          <ItemGroup>
            <Item>
              <ItemDetails>
                <ItemHeader>
                  <ItemTitle>Quick Static</ItemTitle>
                  <ItemStats>
                    <StatIndicator />
                    <StatNumber>1</StatNumber>
                  </ItemStats>
                  <ItemName>Name</ItemName>
                </ItemHeader>
                <Separator />
              </ItemDetails>
              <SubItem>
                <SubItemIcon />
                <SubItemDetails>
                  <SubItemNumber>1</SubItemNumber>
                  <SubItemName>Name</SubItemName>
                </SubItemDetails>
              </SubItem>
            </Item>
          </ItemGroup>
        </LeftColumn>
        <RightColumn>
          <ItemGroup>
            <GroupIcon />
            <GroupIcon />
            <GroupDetails>
              <GroupNumber>1</GroupNumber>
              <GroupName>Name</GroupName>
            </GroupDetails>
          </ItemGroup>
        </RightColumn>
      </ContentSection>
      <GraphSection>
        <GraphContainer>
          <GraphTitle>Compresive Graph</GraphTitle>
          <GraphDescription>sdfghjkl dfghjk dxcfvgbhnjmk</GraphDescription>
        </GraphContainer>
        <GraphIcon />
      </GraphSection>
      <GraphBackground />
    </Container>
  );
};

const Container = styled.div`
  align-self: end;
  display: flex;
  margin-top: 48px;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Title = styled.div`
  color: rgba(128, 128, 128, 1);
  font: 400 32px Inter, sans-serif;
`;

const MainSection = styled.div`
  border-radius: 9px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  margin-top: 47px;
  width: 100%;
  align-items: start;
  gap: 20px;
  font-size: 20px;
  font-weight: 400;
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
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const IconContainer = styled.div`
  background-color: rgba(217, 217, 217, 1);
  width: 68px;
  height: 58px;
  border: 1px solid rgba(0, 0, 0, 1);
`;

const TextContainer = styled.div`
  align-self: start;
  display: flex;
  flex-direction: column;
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
  background-color: rgba(0, 0, 255, 1);
  margin-top: 7px;
  color: rgba(255, 255, 255, 1);
  padding: 11px 25px;
  border: 1px solid rgba(0, 0, 0, 1);
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const ContentSection = styled.div`
  border-radius: 9px;
  background-color: rgba(255, 255, 255, 1);
  margin-top: 57px;
  width: 100%;
  padding: 0 20px 17px;
  border: 1px solid rgba(128, 128, 128, 1);
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
  font-size: 20px;
  font-weight: 500;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ItemDetails = styled.div`
  display: flex;
  gap: 2px;
  color: rgba(0, 0, 0, 1);
`;

const ItemHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.div`
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
  margin-top: 29px;
  width: 1px;
  height: 55px;
  border: 1px solid rgba(128, 128, 128, 0.5);
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
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const SubItemNumber = styled.div`
  font-family: Inter, sans-serif;
  color: rgba(0, 0, 0, 1);
  align-self: center;
`;

const SubItemName = styled.div`
  font-family: Inter, sans-serif;
  color: rgba(128, 128, 128, 1);
  margin-top: 19px;
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
  margin-top: 38px;
  width: 100%;
  flex-direction: column;
  font-weight: 600;
  padding: 8px 36px 37px;
  border: 1px solid rgba(128, 128, 128, 1);
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
  font: 24px Inter, sans-serif;
`;

const GraphDescription = styled.div`
  color: rgba(128, 128, 128, 1);
  margin-top: 31px;
  font: 16px Inter, sans-serif;
`;

const GraphIcon = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  width: 50px;
  height: 59px;
  border: 1px solid rgba(0, 0, 0, 1);
`;

const GraphBackground = styled.div`
  background-color: rgba(217, 217, 217, 1);
  margin-top: 51px;
  height: 242px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export default Home;

