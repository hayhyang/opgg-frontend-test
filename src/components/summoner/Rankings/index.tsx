import { useEffect, useState } from "react";
import styled from "styled-components";
import Champoins from "./Champions";

import RecentWinRates from "./RecentWinRates";

const Rankings = ({ champions, recentWinRate }: any) => {
  const tabItems = ["챔피언 승률", "7일간 랭크 승률"];

  const [currentTab, setCurrentTab] = useState<any>(tabItems[0]);

  const handleChangeTab = (item: any) => {
    setCurrentTab(item);
  };

  useEffect(() => {
    champions?.sort((a: any, b: any) => b.games - a.games);
  }, [champions]);

  useEffect(() => {
    recentWinRate?.sort((a: any, b: any) => {
      return b.wins + b.losses - (a.wins + a.losses);
    });
  }, [recentWinRate]);

  return (
    <Container>
      <TabHeader>
        {tabItems?.map((el, i) => (
          <Tab
            className={el === currentTab ? "on" : ""}
            onClick={() => handleChangeTab(el)}
            key={i}
          >
            {el}
          </Tab>
        ))}
      </TabHeader>
      {currentTab === "챔피언 승률" ? (
        <Champoins champions={champions} />
      ) : (
        <RecentWinRates recentWinRate={recentWinRate} />
      )}
    </Container>
  );
};

const Container = styled.div`
  border: solid 1px #cdd2d2;
`;
const TabHeader = styled.div`
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

export default Rankings;
