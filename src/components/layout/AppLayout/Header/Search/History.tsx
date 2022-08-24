import styled from "styled-components";
import { SearchItemProps } from "types/common";
import Empty from "./Empty";

import SearchItem from "./SearchItem";

const History = ({ history, updateStorage }: SearchItemProps) => {
  return (
    <Container>
      {history?.length ? (
        history?.map((el: string, i: number) => (
          <SearchItem
            key={i}
            el={el}
            star={true}
            storageKey="history"
            updateStorage={updateStorage}
          />
        ))
      ) : (
        <Empty text="최근에 본 소환사가 없습니다" />
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 8px 0;
`;

export default History;
