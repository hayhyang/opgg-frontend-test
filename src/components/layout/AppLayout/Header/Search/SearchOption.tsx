import { useState } from "react";
import styled from "styled-components";

import usePageOn from "hooks/usePageOn";
import { getLocalStorage } from "lib/utils";
import { fadeIn } from "styles/modules";

import Bookmark from "./Bookmark";
import History from "./History";
import Tabs from "./Tabs";

const SearchOption = () => {
  const history = getLocalStorage("history");
  const bookmark = getLocalStorage("bookmark");

  const { pageOn } = usePageOn();

  const tabItems = [
    {
      name: "최근검색",
      component: <History history={history} />,
    },
    {
      name: "즐겨찾기",
      component: <Bookmark bookmark={bookmark} />,
    },
  ];

  const [currentTab, setCurrentTab] = useState(tabItems[0]);

  const handleChangeTab = (e: any, item: any) => {
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
      {currentTab.component}
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
