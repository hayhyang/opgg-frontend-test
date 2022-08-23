import { memo } from "react";
import styled from "styled-components";

import Champion from "./Champion";

import { IMostChampion } from "types/types";

const Champions = ({ champions }: { champions: IMostChampion[] }) => {
  return (
    <Container>
      {champions?.map((el: IMostChampion) => (
        <Champion {...el} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  border-right: 1px solid #cdd2d2;
  padding: 1.6rem;
`;

export default memo(Champions);
