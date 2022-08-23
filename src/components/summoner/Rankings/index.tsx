import { useEffect, useState } from "react";
import styled from "styled-components";
import Champoins from "./Champions";

import RecentWinRates from "./RecentWinRates";
import Tabs from "./Tabs";

const Rankings = ({ champions, recentWinRate }: any) => {
  const tabItems = ["챔피언 승률", "7일간 랭크 승률"];

  const [currentTab, setCurrentTab] = useState<string>(tabItems[0]);

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
      <Tabs
        tabItems={tabItems}
        handleChangeTab={handleChangeTab}
        currentTab={currentTab}
      />
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

export default Rankings;
