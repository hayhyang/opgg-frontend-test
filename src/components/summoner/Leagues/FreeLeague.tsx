import styled from "styled-components";

import { getTier, getWinningRate } from "../../../lib/utils";

import { ILeague } from "types/types";
import Image from "next/image";

const FreeLeague = ({ wins, losses, tierRank }: ILeague) => {
  const winningRate = getWinningRate(wins, losses);

  return (
    <Container>
      <Image
        src={tierRank?.imageUrl}
        width="64"
        height="64"
        alt={tierRank?.name}
      />
      <Metadata>
        <Name>{tierRank?.name}</Name>
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
  border-radius: 2px;
  border: solid 1px #cdd2d2;
  background-color: #f2f2f2;
  margin-bottom: 0.8rem;
`;
const Container = styled(LeagueBase)`
  padding: 1.7rem 2.8rem;
  display: flex;
  align-items: center;
`;
const Metadata = styled.div`
  margin-left: 2.8rem;
`;
const Name = styled.span`
  display: block;
  font-size: 11px;
  color: rgb(135, 146, 146);
`;

const Total = styled.div`
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #353a3a;
  margin-bottom: 0.2rem;
  line-height: 1.3em;
  strong {
    font-size: 1.2rem;
  }
`;

const Tier = styled.div`
  font-family: Helvetica;
  font-size: 13px;
  font-weight: bold;
  text-transform: capitalize;
  color: rgb(31, 142, 205);
  line-height: 1.3em;
`;

const Score = styled.div`
  font-family: Helvetica;
  font-size: 1.2rem;
  color: #879292;
  display: flex;
  line-height: 1.3;
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

export default FreeLeague;
