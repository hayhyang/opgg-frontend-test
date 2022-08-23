import styled from "styled-components";
import Champion from "./Champion";

interface ChampionProps {
  champions: any[];
}

const Champoins = ({ champions }: ChampionProps) => {
  return (
    <Container>
      {champions?.map((el: any, i: number) => (
        <Champion {...el} key={i} />
      ))}
    </Container>
  );
};

const Container = styled.ul``;

export default Champoins;
