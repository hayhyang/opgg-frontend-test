import styled from "styled-components";

import usePageOn from "hooks/usePageOn";
import { fadeIn } from "styles/modules";
import { ISummoner } from "types/types";
import ResultItem from "./ResultItem";

const SearchResult = ({ summoner }: { summoner: ISummoner }) => {
  const { pageOn } = usePageOn();

  return (
    <Container className={pageOn ? "on" : ""}>
      <ResultItem {...summoner} />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 36px;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: rgb(0 0 0 / 50%) 0px 2px 4px 0px;
  ${fadeIn(10)};
  padding: 4px 0;
`;

export default SearchResult;
