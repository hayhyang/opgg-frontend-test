import { useRecoilState } from "recoil";
import { openSearchState } from "recoil/state";
import styled from "styled-components";
import SearchOption from "./SearchOption";

const Search = () => {
  const [openSearch, setOpenSearchState] = useRecoilState(openSearchState);

  const handleFocusInput = () => {
    setOpenSearchState(true);
  };
  return (
    <Container>
      <SearchBox>
        <Input placeholder="소환사명,챔피언…" onFocus={handleFocusInput} />
        <Button>{}</Button>
      </SearchBox>
      {openSearch && <SearchOption />}
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  height: 3.2rem;
  width: 26rem;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchBox = styled.div`
  background-color: #fff;
  height: 3.2rem;
  width: 26rem;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  position: relative;
`;

const Input = styled.input`
  font-size: 12px;
  color: #727272;
  padding-left: 1.4rem;
  flex-grow: 1;
`;
const Button = styled.button`
  height: 100%;
  width: 54px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  svg {
    width: 100%;
    height: 13px;
  }
`;

export default Search;
