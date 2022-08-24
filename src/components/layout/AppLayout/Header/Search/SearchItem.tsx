import { MouseEvent } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { bookmarkState, openSearchState } from "recoil/state";

interface SearchItemProps {
  el: string;
  star: boolean;
  storageKey: string;
  updateStorage: (storageKey: string, el: string) => void;
}

const SearchItem = ({
  el,
  star,
  storageKey,
  updateStorage,
}: SearchItemProps) => {
  const bookmarkDelete = `/images/icon-history-delete.png`;
  const bookmarkOn = `/images/icon-favorite-on.png`;
  const bookmarkOff = `/images/icon-favorite-off.png`;
  const bookmark = useRecoilValue<string[]>(bookmarkState);

  const setOpenSearchState = useSetRecoilState(openSearchState);

  const router = useRouter();

  const handleClick = (el: string) => {
    router.push(`/summoner/${el}`);
    setOpenSearchState(false);
  };

  const handleSetBookmark = (e: MouseEvent<HTMLButtonElement>, el = "") => {
    e.preventDefault();
    e.stopPropagation();
    updateStorage("bookmark", el);
  };

  const handleDelete = (e: MouseEvent<HTMLButtonElement>, el = "") => {
    e.preventDefault();
    e.stopPropagation();
    updateStorage(storageKey, el);
  };

  return (
    <Container onClick={() => handleClick(el)}>
      <Region>KR</Region>
      <Value>{el}</Value>
      {star && (
        <Button onClick={(e) => handleSetBookmark(e, el)}>
          <img
            src={
              bookmark?.some((e: string) => e === el) ? bookmarkOn : bookmarkOff
            }
            alt="즐겨찾기 off"
          />
        </Button>
      )}
      <Button onClick={(e) => handleDelete(e, el)}>
        <img src={bookmarkDelete} alt="즐겨찾기 삭제" />
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
`;

const Region = styled.span`
  isplay: inline-block;
  padding: 0 4px;
  border-radius: 2px;
  height: 18px;
  line-height: 20px;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: normal;
  color: rgb(255, 255, 255);
  background-color: #1ea1f7;
  text-transform: uppercase;
  margin-right: 17px;
`;
const Value = styled.div`
  font-size: 12px;
  line-height: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #44515c;
  flex-grow: 1;
  cursor: pointer;
`;

const Button = styled.button`
  width: 16px;
  height: 16px;
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export default SearchItem;
