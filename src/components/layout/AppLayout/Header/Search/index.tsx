import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import { useRecoilState } from "recoil";
import { openSearchState } from "recoil/state";

import SearchOption from "./SearchOption";

import Logo from "assets/icons/common/logo-gg.svg";

const Search = () => {
  const [openSearch, setOpenSearchState] = useRecoilState(openSearchState);
  const [searchValue, setSearchValue] = useState();
  const router = useRouter();

  const handleFocusInput = () => {
    setOpenSearchState(true);
  };

  const handleChangeValue = ({ target: { value } }: any) => {
    setSearchValue(value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (searchValue) {
      router.push(`/summoner/${searchValue}`);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SearchBox>
          <Input
            placeholder="소환사명,챔피언…"
            onFocus={handleFocusInput}
            value={searchValue}
            onChange={handleChangeValue}
          />
          <Button type="submit">
            <Logo />
          </Button>
        </SearchBox>
      </form>
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

const Input = styled.input<any>`
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
  justify-content: center;
`;

export default Search;
