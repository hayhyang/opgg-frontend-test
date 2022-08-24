import { memo } from "react";
import styled from "styled-components";

import {
  getKDA,
  getWinningRate,
  returnKDAColor,
  returnWinColor,
} from "lib/utils";

const Stats = ({ kills, deaths, assists, wins, losses }: any) => {
  const kda = getKDA(kills, deaths, assists);
  const winningRate = getWinningRate(wins, losses);

  return (
    <Container>
      <Title>
        {wins + losses || 0}전 {wins || 0}승 {losses || 0}패
      </Title>
      <ChartArea>
        <Chart ratio={100 - winningRate}>
          <WinningRate>
            <strong>{winningRate || 0}</strong>%
          </WinningRate>
          <svg>
            <circle className="wins" cx="45" cy="45" r="38.5"></circle>
            <circle className="losses" cx="45" cy="45" r="38.5"></circle>
          </svg>
        </Chart>
        <Metadata>
          <KDA>
            {kills || 0}&nbsp;/&nbsp;<strong>{deaths || 0}</strong>&nbsp;/&nbsp;
            {assists || 0}
          </KDA>
          <Ratio color={returnKDAColor(kda)}>
            <strong>{kda || 0}</strong>:1&nbsp;
            <Rate color={returnWinColor(winningRate)}>
              ({winningRate || 0}%)
            </Rate>
          </Ratio>
        </Metadata>
      </ChartArea>
    </Container>
  );
};

const Container = styled.div`
  border-right: 1px solid #cdd2d2;
  padding: 1.6rem 2.4rem 2.3rem;
`;

const Title = styled.h4`
  font-family: "NanumBarunGothic", sans-serif;
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: normal;
  color: #666;
  margin-bottom: 1.4rem;
  margin-left: 0.9rem;
`;

const ChartArea = styled.div`
  display: flex;
`;
const Chart = styled.div<any>`
  width: 9rem;
  height: 9rem;
  position: relative;
  svg {
    position: relative;
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
    circle {
      width: 100%;
      height: 100%;
      fill: none;
      stroke-width: 13;
      stroke-dasharray: 241.5px;
      transition: 0.4s;
      &.wins {
        stroke: #1f8ecd;
      }
      &.losses {
        stroke: #ee5a52;
        stroke-dashoffset: calc(
          241.5px - (241.5px * ${({ ratio }) => ratio}) / 100
        );
      }
    }
  }
`;
const WinningRate = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  font-family: Helvetica;
  color: #555555;
`;
const Metadata = styled.div`
  margin-left: 3.5rem;
  padding-top: 1.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const KDA = styled.div`
  font-family: Helvetica;
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  line-height: 1.3rem;
  margin-bottom: 0.6rem;
  strong {
    color: #c6443e;
  }
`;

const Ratio = styled.div`
  font-family: Helvetica;
  font-size: 1.6rem;
  line-height: 1.9rem;
  display: flex;
  align-items: center;
  color: ${({ color }) => color};
`;
const Rate = styled.div`
  color: ${({ color }) => color};
  font: inherit;
`;

export default memo(Stats);
