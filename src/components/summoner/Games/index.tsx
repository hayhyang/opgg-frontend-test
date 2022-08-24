import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import Game from "./Game";

import { dashboardTabState } from "../../../recoil/state";
import { IGameInfo } from "types/types";

interface GamesProps {
  games: IGameInfo[];
}

const Games = ({ games }: GamesProps) => {
  const dashboardTab = useRecoilValue(dashboardTabState);

  const [gameList, setGameList] = useState<IGameInfo[]>([]);

  useEffect(() => {
    setGameList(games);
  }, [games]);

  const returnGames = () => {
    if (dashboardTab === "전체") setGameList(games);
    if (dashboardTab === "솔로게임")
      setGameList([...games].filter((el: IGameInfo) => el.gameType === "솔랭"));
    if (dashboardTab === "자유랭크")
      setGameList(
        [...games].filter((el: IGameInfo) => el.gameType === "자유 5:5 랭크")
      );
  };

  useEffect(() => {
    returnGames();
  }, [dashboardTab]);

  return (
    <Container>
      {gameList?.map((el: IGameInfo, i: number) => (
        <Game {...el} key={i} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 1.6rem;
`;

export default memo(Games);
