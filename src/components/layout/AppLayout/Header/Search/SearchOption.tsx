import usePageOn from "hooks/usePageOn";
import { useState } from "react";
import styled from "styled-components";
import { fadeIn } from "styles/modules";
import Bookmark from "./Bookmark";
import RecentSearch from "./RecentSearch";
import Tabs from "./Tabs";

const SearchOption = () => {
  const recentList = ["OOPG", "Hide on bush", "뽀 삐"];
  const bookmarkList = ["OOPG"];

  const { pageOn } = usePageOn();

  const tabItems = [
    {
      name: "최근검색",
      component: <RecentSearch recentList={recentList} />,
    },
    {
      name: "즐겨찾기",
      component: <Bookmark bookmarkList={bookmarkList} />,
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
