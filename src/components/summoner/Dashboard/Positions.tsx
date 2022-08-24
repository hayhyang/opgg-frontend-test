import { memo } from "react";
import styled from "styled-components";
import { IPosition } from "types/types";

import Position from "./Position";

interface IPositions {
  positions: IPosition[];
}

const Positions = ({ positions }: IPositions) => {
  const getRoleRate = (games = 0) => {
    const totalGames = positions.reduce(
      (a: IPosition, b: IPosition) => a.games + b.games
    );
    return Math.round((games / totalGames) * 100);
  };

  return (
    <Container>
      <Title>선호 포지션 (랭크)</Title>
      {positions?.map((el: IPosition, i: number) => (
        <Position {...el} key={i} getRoleRate={getRoleRate} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 1.6rem;
`;

const Title = styled.h4`
  font-family: "NanumBarunGothic", sans-serif;
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: normal;
  color: #666;
  margin-bottom: 2.2rem;
`;

export default memo(Positions);
