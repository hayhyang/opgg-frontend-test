import styled from "styled-components";

import Stats from "./Stats";
import Positions from "./Positions";
import Champions from "./Champions";

interface DashboardProps {
  summary: any;
  champions: any;
  positions: any;
  games: any;
}

const Dashboard = ({
  summary,
  champions,
  positions,
  games,
}: DashboardProps) => {
  return (
    <Container>
      <Stats {...summary} />
      <Champions champions={champions} />
      <Positions positions={positions} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default Dashboard;
