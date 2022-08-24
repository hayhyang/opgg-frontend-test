import { useState } from "react";
import styled from "styled-components";

import usePageOn from "hooks/usePageOn";
import { useRecoilState } from "recoil";

import { fadeIn } from "styles/modules";

import Bookmark from "./Bookmark";
import History from "./History";
import Tabs from "./Tabs";

import { bookmarkState, historyState } from "recoil/state";

const SearchOption = () => {
  const [bookmark, setBookmark] = useRecoilState<any>(bookmarkState);
  const [history, setHistory] = useRecoilState<any>(historyState);

  const updateStorage = (storageKey = "", value = "") => {
    if (storageKey === "bookmark") {
      let updateArr = [];
      if (bookmark.includes(value)) {
        updateArr = [...bookmark].filter((el) => el !== value);
      } else {
        updateArr = [...bookmark, value];
      }
      setBookmark(updateArr);
    }

    if (storageKey === "history") {
      let updateArr = [];
      if (history.includes(value)) {
        updateArr = [...history].filter((el) => el !== value);
      } else {
        updateArr = [...history, value];
      }
      setHistory(updateArr);
    }
  };

  const { pageOn } = usePageOn();

  const tabItems = ["최근검색", "즐겨찾기"];

  const [currentTab, setCurrentTab] = useState(tabItems[0]);

  const handleChangeTab = (e: MouseEvent, item: string) => {
    e.preventDefault();
    setCurrentTab(item);
  };

  return (
    <Container className={pageOn ? "on" : ""}>
      <Tabs
        tabItems={tabItems}
        handleChangeTab={handleChangeTab}
        currentTab={currentTab}
      />
      {currentTab === "최근검색" ? (
        <History history={history} updateStorage={updateStorage} />
      ) : (
        <Bookmark bookmark={bookmark} updateStorage={updateStorage} />
      )}
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
`;

export default SearchOption;
