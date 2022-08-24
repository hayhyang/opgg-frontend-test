import { memo } from "react";
import styled from "styled-components";

import Avatar from "components/common/Avatar";
import { getKDA, getWinningRate, returnKDAColor } from "lib/utils";
import { IMostChampion } from "types/types";

import DefaultAvatar from "assets/icons/group.svg";

interface ChampionProps extends IMostChampion {
  empty?: boolean;
}

const Champion = ({
  imageUrl,
  name,
  wins,
  losses,
  kills,
  deaths,
  assists,
  empty,
}: ChampionProps) => {
  const winninfRate = getWinningRate(wins, losses);
  const kda = getKDA(kills, assists, deaths);

  return (
    <Container>
      {imageUrl ? (
        <Avatar src={imageUrl} alt={name} size="3.4rem" />
      ) : (
        <DefaultAvatar />
      )}

      {empty ? (
        <EmptyMessage>챔피언 정보가 없습니다.</EmptyMessage>
      ) : (
        <Metadata>
          <Name>{name}</Name>
          <Statistics>
            <WinningRate color={winninfRate > 60 ? "#c6443e" : "#555555"}>
              <Value>
                <strong>{winninfRate}</strong>%
              </Value>
              &nbsp;({wins}
              승&nbsp;{losses}패)
            </WinningRate>
            <KDA color={returnKDAColor(kda)}>
              <strong>{kda}</strong> 평점
            </KDA>
          </Statistics>
        </Metadata>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }
`;

const Metadata = styled.div`
  margin-left: 0.8rem;
`;
const Name = styled.div`
  color: #333;
  font-size: 1.4rem;
  line-height: 1.6rem;
  margin-bottom: 0.3rem;
`;

const Statistics = styled.div`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  font-size: 1.1rem;
  line-height: 1.3rem;
  color: #555;
`;

const Value = styled.span``;
const WinningRate = styled.div`
  display: flex;
  align-items: center;

  &:after {
    content: "";
    display: block;
    margin: 0 0.6rem 0 0.8rem;
    width: 0.1rem;
    height: 1.1rem;
    background-color: #cdd2d2;
  }
  ${Value} {
    color: ${({ color }) => color};
  }
`;
const KDA = styled.div`
  color: ${({ color }) => color};
`;
const EmptyMessage = styled.div`  
  height: 12px;
  font-family: NanumBarunGothicOTF;
  font-size: 11px;
  color: #999;
  margin-left: 8px;
}`;

export default memo(Champion);
