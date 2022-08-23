import styled from "styled-components";

import SearchItem from "./SearchItem";

const RecentSearch = ({ recentList }: any) => {
  return (
    <Container>
      {recentList?.map((el: string, i: number) => (
        <SearchItem key={i} el={el} />
      ))}
    </Container>
  );
};

const Container = styled.div``;

export default RecentSearch;
