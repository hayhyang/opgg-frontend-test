import styled from "styled-components";
import { SearchItemProps } from "types/common";

import Empty from "./Empty";
import SearchItem from "./SearchItem";

const Bookmark = ({ bookmark, updateStorage }: SearchItemProps) => {
  return (
    <Container>
      {bookmark?.length ? (
        bookmark?.map((el: string, i: number) => (
          <SearchItem
            el={el}
            key={i}
            star={false}
            storageKey="bookmark"
            updateStorage={updateStorage}
          />
        ))
      ) : (
        <Empty text="관심있는 소환사에 즐겨찾기를 하여 편리하게 정보를 받아보세요." />
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 8px 0;
`;

export default Bookmark;
