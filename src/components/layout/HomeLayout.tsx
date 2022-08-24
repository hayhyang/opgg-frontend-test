import { ReactNode } from "react";
import styled from "styled-components";

interface HomeLayoutProps {
  visual: ReactNode;
  search: ReactNode;
}

const HomeLayout = ({ visual, search }: HomeLayoutProps) => {
  return (
    <Container>
      <Inner>
        {visual}
        <div className="search">{search}</div>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background-color: #1ea1f7;
`;

const Inner = styled.div`
  max-width: 102.4rem;
  margin: 0 auto;
  padding: 0 1.2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .search {
    width: 624px;
  }
`;

export default HomeLayout;
