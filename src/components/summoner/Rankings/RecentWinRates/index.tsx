import styled from "styled-components";
import RecentWinRate from "./RecentWinRate";

const RecentWinRates = ({ recentWinRate }: any) => {
  return (
    <Container>
      {recentWinRate?.map((el: any, i: number) => (
        <RecentWinRate {...el} key={i} />
      ))}
    </Container>
  );
};

const Container = styled.div``;

export default RecentWinRates;
