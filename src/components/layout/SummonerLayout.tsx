import { ReactNode } from "react";
import styled from "styled-components";
import { IMatchesDTO } from "types/types";

interface SummonerLayoutProps {
  loading?: boolean;
  profile?: ReactNode;
  leagues?: ReactNode;
  rankings?: ReactNode;
  dashboard?: ReactNode;
  games?: ReactNode;
}

const SummonerLayout = ({
  loading,
  profile,
  leagues,
  rankings,
  dashboard,
  games,
}: SummonerLayoutProps) => {
  return (
    <Container>
      <SummonerHeader>
        <Inner>{profile}</Inner>
      </SummonerHeader>
      <SummonerContents>
        <Inner>
          <div>
            {leagues}
            {rankings}
          </div>
          <div>
            {dashboard}
            {games}
          </div>
        </Inner>
      </SummonerContents>
    </Container>
  );
};

const Container = styled.div``;

const Inner = styled.div`
  max-width: 102.4rem;
  margin: 0 auto;
  padding: 0 1.2rem 0;
`;
const SummonerHeader = styled.div`
  padding: 1.5rem 0 1.2rem;
  border-bottom: 1px solid #d8d8d8;
`;

const SummonerContents = styled.div`
  padding: 1rem 0 10rem 0;
  ${Inner} {
    display: grid;
    grid-template-columns: 30rem 69rem;
    gap: 1rem;
  }
`;

export default SummonerLayout;
