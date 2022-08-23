import SummonerHeader from "components/Summoner/SummonerHeader";
import SummonerContents from "components/Summoner/SummonerContents";

import type { GetServerSideProps, NextPage } from "next";

const Summoner: NextPage = ({ summoner, mostInfo, matches }: any) => {
  return (
    <>
      <SummonerHeader {...summoner} />
      <SummonerContents />
    </>
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
