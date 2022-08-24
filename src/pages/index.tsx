import Search from "components/home/Search";
import Visual from "components/home/Visual";
import HomeLayout from "components/layout/HomeLayout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return <HomeLayout visual={<Visual />} search={<Search />} />;
};

export default Home;
