import styled from "styled-components";

import Stats from "./Stats";
import Positions from "./Positions";
import Champions from "./Champions";
import Tabs from "./Tabs";

import { IChampion, IPosition, ISummary } from "types/types";

interface DashboardProps {
  summary: ISummary;
  champions: IChampion[];
  positions: IPosition;
}

const Dashboard = ({ summary, champions, positions }: DashboardProps) => {
  return (
    <Container>
      <Tabs />
      <TabContents>
        <Stats {...summary} />
        <Champions champions={champions} />
        <Positions positions={positions} />
      </TabContents>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  & > div {
    display: flex;
  }
`;
const TabContents = styled.div`
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border: solid 1px #cdd2d2;
  border-top: none;
  background-color: #ededed;
  background-color: #eaeaea;
  display: flex;
`;
export default Dashboard;
