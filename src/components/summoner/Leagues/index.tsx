import styled from "styled-components";
import { ILeague } from "types/types";
import FreeLeague from "./FreeLeague";
import SoloLeague from "./SoloLeague";

interface LeaguesProps {
  leagues: ILeague[];
}

const Leagues = ({ leagues }: LeaguesProps) => {
  return (
    <Container>
      <SoloLeague {...leagues[0]} />
      <FreeLeague {...leagues[1]} />
    </Container>
  );
};

const Container = styled.div``;

export default Leagues;
