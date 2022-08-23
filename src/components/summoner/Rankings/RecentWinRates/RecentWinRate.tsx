import { memo } from "react";
import styled from "styled-components";

import { getWinningRate } from "lib/utils";
import { ellipsis } from "../../../../styles/modules";

import Avatar from "components/common/Avatar";

const RecentWinRate = ({ name, imageUrl, wins, losses }: any) => {
  const winningRate = getWinningRate(wins, losses);

  return (
    <Container>
      <Avatar src={imageUrl} alt={name} size="3.2rem" />
      <Name>{name}</Name>
      <WinningRate>
        <Rate>{winningRate}%</Rate>
        <BarChart>
          <Win width={winningRate} wins={wins} />
          <Losses losses={losses} />
        </BarChart>
      </WinningRate>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 8px 8px 8px 15px;
  align-items: center;
  &:not(:last-child) {
    border-bottom: 1px solid #cdd2d2;
  }
`;

const Name = styled.h6`
  color: #5e5e5e;
  font-size: 1.3rem;
  font-weight: bold;
  margin-left: 1rem;
  width: 6rem;
  ${ellipsis(1)}
`;

const WinningRate = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  border-radius: 0.4rem;
`;
const Rate = styled.span`
  font-family: Helvetica;
  font-size: 13px;
  font-weight: bold;
  color: #879292;
  margin-right: 1.2rem;
`;
const BarChart = styled.div`
  display: flex;
  align-items: center;
  width: 12.3rem;
  height: 2.4rem;
  font-family: Helvetica;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  border-radius: 0.4rem;
  overflow: hidden;
`;

const Win = styled.div<any>`
  position: relative;
  text-align: left;
  background-color: #1f8ecd;
  flex-basis: ${({ width }) => width}%;
  height: 100%;
  &:after {
    position: absolute;
    content: "${({ wins }) => wins}승";
    display: block;
    left: 0.4rem;
    top: 0.5rem;
    z-index: 1;
    width: 10rem;
  }
`;
const Losses = styled.div<any>`
  position: relative;
  flex-grow: 1;
  text-align: right;
  background-color: #ee5a52;
  height: 100%;
  &:after {
    position: absolute;
    display: block;
    content: "${({ losses }) => losses}패";
    right: 0.4rem;
    top: 0.5rem;
    z-index: 1;
    width: 10rem;
  }
`;

export default memo(RecentWinRate);
