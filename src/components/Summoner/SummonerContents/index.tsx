import styled from "styled-components";

const SummonerContents = () => {
  return (
    <Container>
      <Inner>
        <div></div>
        <div></div>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 10px;
`;

const Inner = styled.div`
  max-width: 102.4rem;
  margin: 0 auto;
  padding: 0 1.2rem;
`;

export default SummonerContents;
