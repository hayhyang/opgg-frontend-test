import styled from "styled-components";
import { IChampion } from "types/types";
import Champion from "./Champion";

interface ChampionProps {
  champions: IChampion[];
}

const Champoins = ({ champions }: ChampionProps) => {
  return (
    <Container>
      {champions?.map((el: IChampion, i: number) => (
        <Champion {...el} key={i} />
      ))}
    </Container>
  );
};

const Container = styled.ul``;

export default Champoins;
