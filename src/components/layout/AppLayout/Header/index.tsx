import dynamic from "next/dynamic";
import styled from "styled-components";

const SearchNoSSR = dynamic(() => import("./Search"), {
  ssr: false,
});

const Header = () => {
  return (
    <Container>
      <Inner>
        <SearchNoSSR />
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  background-color: #1ea1f7;
  height: 97px;
`;

const Inner = styled.div`
  max-width: 102.4rem;
  margin: 0 auto;
  padding: 0 1.2rem 1.2rem;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export default Header;
