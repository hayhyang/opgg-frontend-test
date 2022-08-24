import styled from "styled-components";
import dynamic from "next/dynamic";

const SearchNoSSR = dynamic(
  () => import("components/layout/AppLayout/Header/Search"),
  {
    ssr: false,
  }
);

const Search = () => {
  return (
    <Container>
      <SearchNoSSR />
    </Container>
  );
};

const Container = styled.div``;

export default Search;
