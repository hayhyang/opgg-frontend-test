import { memo } from "react";
import styled from "styled-components";

import Champion from "./Champion";

import { IMostChampion } from "types/types";

interface ChampionsProps {
  champions: IMostChampion[];
}

const Champions = ({ champions }: ChampionsProps) => {
  const defaultChamp = Array.from(Array(3).keys());

  return (
    <Container>
      {defaultChamp.map((i: number) => {
        if (champions[i]) return <Champion {...champions[i]} key={String(i)} />;
        else return <Champion empty={true} key={String(i)} />;
      })}
    </Container>
  );
};

const Container = styled.ul`
  border-right: 1px solid #cdd2d2;
  padding: 1.6rem;
  flex-basis: 229px;
  flex-shrink: 0;
`;

export default memo(Champions);
