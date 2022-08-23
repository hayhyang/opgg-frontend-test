import styled from "styled-components";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { openSearchState } from "recoil/state";
import { getLocalStorage, setLocalStorage } from "lib/utils";

const SearchItem = ({ el, star }: { el: string; star: boolean }) => {
  const bookmarkDelete = `/images/icon-history-delete.png`;
  const bookmarkOn = `/images/icon-favorite-on.png`;
  const bookmarkOff = `/images/icon-favorite-off.png`;

  const setOpenSearchState = useSetRecoilState(openSearchState);
  const bookmark = getLocalStorage("bookmark");

  const router = useRouter();

  const handleClick = (el: string) => {
    router.push(`/summoner/${el}`);
    setOpenSearchState(false);
  };

  const handleClickBookmark = (e: any, el: string) => {
    e.preventDefault();
    e.stopPropagation();
    setLocalStorage("bookmark", el);
  };

  const handleDeleteBookmark = (e: any, el: string) => {
    e.preventDefault();
    e.stopPropagation();
    setLocalStorage("bookmark", el);
  };

  return (
    <Container onClick={() => handleClick(el)}>
      <Value>{el}</Value>
      {star && (
        <Button onClick={(e) => handleClickBookmark(e, el)}>
          <img
            src={
              bookmark?.some((e: string) => e === el) ? bookmarkOn : bookmarkOff
            }
            alt="즐겨찾기 off"
          />
        </Button>
      )}
      <Button onClick={(e) => handleDeleteBookmark(e, el)}>
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
