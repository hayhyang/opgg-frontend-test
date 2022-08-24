import { FormEvent, MouseEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

import { getSummonerApi } from "pages/api/api";

import { historyState, openSearchState, searchValueState } from "recoil/state";

import SearchOption from "./SearchOption";
import SearchResult from "./SearchResult";

import Logo from "assets/icons/logo-gg.svg";

import { ISummoner } from "types/types";

const Search = () => {
  const [openSearch, setOpenSearchState] = useRecoilState(openSearchState);
  const [searchValue, setSearchValue] = useRecoilState(searchValueState);
  const [history, setHistory] = useRecoilState<any>(historyState);
  const targetRef = useRef<any>();
  const router = useRouter();
  const {
    query: { summonerName },
  } = router;

  const handleClickInput = () => {
    setOpenSearchState(true);
  };

  const handleChangeValue = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    setSearchValue(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchValue && summonerName !== searchValue) {
      router.push(`/summoner/${searchValue}`);

      if (history.includes(searchValue)) {
        const filter = history.filter((el: string) => el !== searchValue);
        setHistory([searchValue, ...filter]);
      } else {
        setHistory([...history, searchValue]);
      }
    }
    setSearchValue("");
    setOpenSearchState(false);
  };

  const [summoner, setSummoner] = useState<ISummoner>({
    name: "",
    profileImageUrl: "",
    previousTiers: [],
  });

  const getSummoner = async () => {
    if (searchValue) {
      const result = await getSummonerApi(searchValue);
      setSummoner({
        name: result?.summoner?.name,
        profileImageUrl: result?.summoner?.profileImageUrl,
        previousTiers: result?.summoner?.previousTiers,
      });
    }
  };

  useEffect(() => {
    getSummoner();
  }, [searchValue]);

  const handleClose = (e: MouseEvent) => {
    if (targetRef?.current?.contains(e.target)) {
      return;
    }
    setOpenSearchState(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, []);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SearchBox>
          <Input
            placeholder="소환사명,챔피언…"
            onClick={handleClickInput}
            value={searchValue}
            onChange={handleChangeValue}
            onFocus={handleClickInput}
          />
          <Button type="submit">
            <Logo />
          </Button>
        </SearchBox>
      </form>
      {openSearch && (
        <div ref={targetRef}>
          {!searchValue ? (
            <SearchOption />
          ) : (
            <SearchResult summoner={summoner} />
          )}
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  height: 3.2rem;
  width: 100%;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  position: relative;
  form {
    width: 100%;
  }
`;

const SearchBox = styled.div`
  background-color: #fff;
  height: 3.2rem;
  width: 100%;
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
  flex-basis: 54px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Search;
