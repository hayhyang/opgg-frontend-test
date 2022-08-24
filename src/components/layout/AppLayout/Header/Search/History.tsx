import styled from "styled-components";
import Empty from "./Empty";

import SearchItem from "./SearchItem";

const History = ({ history, setter, updateStorage }: any) => {
  return (
    <Container>
      {history?.length ? (
        history?.map((el: string, i: number) => (
          <SearchItem
            key={i}
            el={el}
            star={true}
            storageKey="history"
            setter={setter}
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
