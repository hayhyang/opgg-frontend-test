import { useState } from "react";
import styled from "styled-components";
import Bookmark from "./Bookmark";
import RecentSearch from "./History";

const Tabs = ({ tabItems, handleChangeTab, currentTab }: any) => {
  return (
    <Container>
      {tabItems?.map((el, i) => (
        <Tab
          className={el === currentTab ? "on" : ""}
          onClick={(e) => handleChangeTab(e, el)}
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

const Tab = styled.button`
  flex: 1;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: rgb(156, 156, 156);
  background-color: rgb(227, 227, 227);
  transition: 0.2s;
  text-align: center;
  &.on {
    color: rgb(74, 74, 74);
    background-color: rgb(255, 255, 255);
  }
`;

export default Tabs;
