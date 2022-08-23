import styled from "styled-components";
import SearchItem from "./SearchItem";

const Bookmark = ({ bookmarkList }: any) => {
  return (
    <Container>
      {bookmarkList.map((el: string, i: number) => (
        <SearchItem el={el} key={i} />
      ))}
    </Container>
  );
};

const Container = styled.div``;

export default Bookmark;
