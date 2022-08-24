import styled from "styled-components";
import { IChampionWinRate } from "types/types";
import RecentWinRate from "./RecentWinRate";

interface RecentWinRateProps {
  recentWinRate: IChampionWinRate[];
}

const RecentWinRates = ({ recentWinRate }: RecentWinRateProps) => {
  return (
    <Container>
      {recentWinRate?.map((el: IChampionWinRate, i: number) => (
        <RecentWinRate {...el} key={i} />
      ))}
    </Container>
  );
};

const Container = styled.div``;

export default RecentWinRates;
