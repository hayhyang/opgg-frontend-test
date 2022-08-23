import SummonerHeader from "components/Summoner/SummonerHeader";
import SummonerContents from "components/Summoner/SummonerContents";

import type { NextPage } from "next";

const Summoner: NextPage = () => {
  return (
    <>
      <SummonerHeader />
      <SummonerContents />
    </>
  );
};

export default Summoner;
