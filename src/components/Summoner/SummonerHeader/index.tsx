import styled from "styled-components";

const SummonerHeader = () => {
  return (
    <Container>
      <Inner></Inner>
    </Container>
  );
};

const Container = styled.div``;

const Inner = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding: 1.5rem 2.1rem 1.2rem;
`;

export default SummonerHeader;
