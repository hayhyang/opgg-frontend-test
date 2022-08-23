import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import Game from "./Game";

import { dashboardTabState } from "../../../recoil/state";

const MatchesGames = ({ games }: any) => {
  const dashboardTab = useRecoilValue(dashboardTabState);

  const [gameList, setGameList] = useState<any>([]);

  useEffect(() => {
    setGameList(games);
  }, [games]);

  useEffect(() => {
    if (dashboardTab === "전체") setGameList(games);
    if (dashboardTab === "솔로게임")
      setGameList([...games].filter((el: any) => el.gameType === "솔랭"));
    if (dashboardTab === "자유랭크")
      setGameList(
        [...games].filter((el: any) => el.gameType === "자유 5:5 랭크")
      );
  }, [dashboardTab]);

  return (
    <Container>
      {gameList?.map((el: any, i: number) => (
        <Game {...el} key={i} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 1.6rem;
`;

export default memo(MatchesGames);
