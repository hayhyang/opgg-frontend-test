import styled from "styled-components";
import { useRecoilState } from "recoil";

import { dashboardTabState } from "recoil/state";

const Tabs = () => {
  const tabItems = ["전체", "솔로게임", "자유랭크"];

  const [dashboardTab, setDashboardTab] = useRecoilState(dashboardTabState);

  const handleChangeTab = (item: string) => {
    setDashboardTab(item);
  };

  return (
    <Container>
      {tabItems.map((el, i) => (
        <Tab
          className={el === dashboardTab ? "on" : ""}
          onClick={() => handleChangeTab(el)}
          key={i}
        >
          {el}
        </Tab>
      ))}
    </Container>
  );
};

const Container = styled.div`
  background-color: #f2f2f2;
  display: flex;
  padding: 0 1.6rem;
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  border: solid 1px #cdd2d2;
`;

const Tab = styled.div`
  position: relative;
  height: 3.6rem;
  line-height: 3.6rem;
  font-family: "NanumBarunGothic", sans-serif;
  font-size: 12px;
  color: #555;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 2.4rem;
  }
  &:after {
    content: "";
    position: absolute;
    height: 2px;
    left: 50%;
    width: 0;
    right: 0;
    bottom: -1px;
    background: #1f8ecd;
    transition: all 0.3s;
  }
  &.on {
    color: #1f8ecd;
    font-weight: bold;
    &:after {
      left: 0;
      width: 100%;
    }
  }
`;

export default Tabs;
