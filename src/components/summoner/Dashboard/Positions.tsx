import { memo } from "react";
import styled from "styled-components";

import Position from "./Position";

const Positions = ({ positions }: any) => {
  const getRoleRate = (games: number) => {
    const totalGames = positions.reduce((a: any, b: any) => a.games + b.games);
    return Math.round((games / totalGames) * 100);
  };

  return (
    <Container>
      <Title>선호 포지션 (랭크)</Title>
      {positions?.map((el: any, i: number) => (
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
