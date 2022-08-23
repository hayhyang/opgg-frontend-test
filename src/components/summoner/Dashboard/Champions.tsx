import { memo } from "react";
import styled from "styled-components";

import Champion from "./Champion";

import { IChampion } from "types/types";

const Champions = ({ champions }: { champions: IChampion[] }) => {
  return (
    <Container>
      {champions?.map((el: IChampion) => (
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
