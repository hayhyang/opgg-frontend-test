import type { GetServerSideProps, NextPage } from "next";

import SummonerLayout from "components/layout/SummonerLayout";

import Profile from "components/summoner/Profile";
import Leagues from "components/summoner/Leagues";
import Rankings from "components/summoner/Rankings";
import Dashboard from "components/summoner/Dashboard";
import Games from "components/summoner/Games";

import { IMatchesDTO, IMostInfoDTO, ISummoner } from "types/types";

interface SummonerProps {
  summoner: ISummoner;
  mostInfo: IMostInfoDTO;
  matches: IMatchesDTO;
}

const Summoner: NextPage<SummonerProps> = ({ summoner, mostInfo, matches }) => {
  return (
    <SummonerLayout
      profile={<Profile {...summoner} />}
      leagues={<Leagues leagues={summoner?.leagues} />}
      rankings={<Rankings {...mostInfo} />}
      dashboard={<Dashboard {...matches} />}
      games={<Games games={matches?.games} />}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const BASE_URL = "https://codingtest.op.gg/api";
    const SUMMONER_URL = `${BASE_URL}/summoner`;

    const { summonerName } = context.query;
    const summoner = await fetch(`${SUMMONER_URL}/${summonerName}`).then(
      (response) => response.json()
    );

    const mostInfo = await fetch(
      `${SUMMONER_URL}/${summonerName}/mostInfo`
    ).then((response) => response.json());

    const matches = await fetch(`${SUMMONER_URL}/${summonerName}/matches`).then(
      (response) => response.json()
    );

    return {
      props: {
        summoner: summoner?.summoner,
        mostInfo,
        matches,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
};

export default Summoner;
