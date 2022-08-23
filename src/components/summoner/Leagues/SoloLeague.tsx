import styled from "styled-components";

import { getTier, getWinningRate } from "lib/utils";

import { ILeague } from "types/types";
import Image from "next/image";

const SoloLeague = ({ wins, losses, tierRank }: ILeague) => {
  const winningRate = getWinningRate(wins, losses);

  return (
    <Container>
      <Image
        src={tierRank?.imageUrl}
        width="104"
        height="104"
        alt={tierRank?.name}
      />
      <Metadata>
        <Name>솔로 랭크</Name>
        <Total>
          <strong>탑</strong> (총 {wins + losses}게임)
        </Total>
        <Tier>{getTier(tierRank)}</Tier>
        <Score>
          <LeaguePoint>{tierRank?.lp} LP</LeaguePoint>
          &nbsp;/&nbsp;
          <Score>
            {wins}승 {losses}패
          </Score>
        </Score>
        <WinningRate>승률 {winningRate}%</WinningRate>
      </Metadata>
    </Container>
  );
};

const LeagueBase = styled.div`
  border-radius: 0.2rem;
  border: solid 1px #cdd2d2;
  background-color: #f2f2f2;
  margin-bottom: 0.8rem;
`;
const Container = styled(LeagueBase)`
  padding: 1rem 0.8rem;
  display: flex;
  align-items: center;
`;

const Metadata = styled.div`
  margin-left: 0.8rem;
`;
const Name = styled.span`
  display: block;
  font-size: 1.1rem;
  line-height: 1.3rem;
  color: #879292;
  margin-bottom: 0.4rem;
`;

const Total = styled.div`
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #353a3a;
  margin-bottom: 0.4rem;
  strong {
    font-size: 1.2rem;
  }
`;

const Tier = styled.div`
  font-family: Helvetica;
  font-size: 1.5rem;
  line-height: 1.8rem;
  font-weight: bold;
  color: #1f8ecd;
  margin-bottom: 0.6rem;
`;

const Score = styled.div`
  font-family: Helvetica;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #879292;
  display: flex;
  margin-bottom: 0.2rem;
`;
const LeaguePoint = styled.strong`
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  color: #555e5e;
`;

const WinningRate = styled.div`
  font-family: Helvetica;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #879292;
`;

export default SoloLeague;
