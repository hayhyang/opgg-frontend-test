import styled from "styled-components";

import {
  getKDA,
  getWinningRate,
  returnKDAColor,
  returnWinColor,
} from "lib/utils";
import { ellipsis } from "styles/modules";

import Avatar from "components/common/Avatar";

import { IMostChampion } from "types/types";

const Champion = ({
  name,
  imageUrl,
  cs,
  wins,
  losses,
  games,
  kills,
  deaths,
  assists,
}: IMostChampion) => {
  const winningRate = getWinningRate(wins, losses);
  const kda = getKDA(kills, deaths, assists);

  return (
    <Container>
      <Avatar src={imageUrl} alt={name} size="4.5rem" />
      <Info>
        <Name>{name}</Name>
        <Cs>CS {cs}</Cs>
      </Info>
      <Kda>
        <KdaString color={returnKDAColor(kda)}>{kda}:1 평점</KdaString>
        <KdaValue>
          {kills} / {deaths} / {assists}
        </KdaValue>
      </Kda>
      <Played>
        <WinningRate color={returnWinColor(winningRate)}>
          {winningRate}%
        </WinningRate>
        <PlayCount>{games} 게임</PlayCount>
      </Played>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 4px 0px 4px 15px;
  align-items: center;
  &:not(:last-child) {
    border-bottom: 1px solid #cdd2d2;
  }
`;

const Info = styled.div`
  margin-left: 1rem;
  width: 85px;
`;

const Kda = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;
const KdaString = styled.div`
  line-height: 17px;
  font-family: Helvetica;
  font-size: 13px;
  font-weight: bold;
  color: #5e5e5e;
  margin-bottom: 3px;
  color: ${({ color }) => color};
`;
const KdaValue = styled.div`
  color: #879292;
`;

const Name = styled.h6`
  color: #5e5e5e;
  font-size: 13px;
  font-weight: bold;
  line-height: 1.6rem;
  margin-bottom: 0.3rem;
  ${ellipsis(1)}
`;

const Cs = styled.div`
  line-height: 13px;
  font-family: Helvetica;
  font-size: 11px;
  color: #879292;
`;
const Played = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const WinningRate = styled.div`
  line-height: 17px;
  font-family: Helvetica;
  font-size: 13px;
  font-weight: bold;
  color: #5e5e5e;
  margin-bottom: 3px;
  color: ${({ color }) => color};
`;
const PlayCount = styled.div`
  line-height: 13px;
  font-family: Helvetica;
  font-size: 11px;
  color: #879292;
`;

export default Champion;
