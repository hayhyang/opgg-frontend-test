import { useState } from "react";
import styled from "styled-components";

const Tabs = ({ currentTab, tabItems, handleChangeTab }: any) => {
  return (
    <Container>
      {tabItems?.map((el: string, i: number) => (
        <Tab
          className={el === currentTab ? "on" : ""}
          onClick={() => handleChangeTab(el)}
          key={i}
        >
          {el}
        </Tab>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
const Tab = styled.div`
  flex: 1;
  height: 4.4rem;
  font-size: 12px;
  text-align: center;
  color: #879292;
  border-bottom: solid 1px #cdd2d2;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  &:first-child {
    border-right: solid 1px #cdd2d2;
  }
  &.on {
    background-color: #eaeaea;
    color: #5e5e5e;
    font-weight: bold;
    border-bottom: none;
  }
`;

export default Tabs;
