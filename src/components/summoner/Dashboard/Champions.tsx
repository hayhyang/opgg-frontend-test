import { memo } from "react";
import styled from "styled-components";

import Champion from "./Champion";

import { IMostChampion } from "types/types";

const Champions = ({ champions }: { champions: IMostChampion[] }) => {
  const defaultChamp = Array.from(Array(3).keys());

  return (
    <Container>
      {defaultChamp.map((i: number) => {
        if (champions[i]) return <Champion {...champions[i]} key={i} />;
        else return <Champion empty={true} key={i} />;
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
