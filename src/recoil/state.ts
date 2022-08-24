import { localStorageEffect } from "lib/utils";
import { getMatchsApi, getMostInfoApi, getSummonerApi } from "pages/api/api";
import { atom, selector } from "recoil";

export const summonerNameState = atom<string>({
  key: "summonerNameState",
  default: "Hide on bush",
});

export const dashboardTabState = atom<string>({
  key: "dashboardTabState",
  default: "전체",
});

export const openSearchState = atom<boolean>({
  key: "openSearchState",
  default: false,
});
export const openResultState = atom<boolean>({
  key: "openResultState",
  default: false,
});

export const getSummoner = selector({
  key: "get/summoner",
  get: async ({ get }) => {
    const summonerName = get(summonerNameState);
    try {
      const response = await getSummonerApi(summonerName);
      return response?.summoner;
    } catch (err) {
      throw Error("잘못된 요청입니다.");
    }
  },
});

export const getMostInfo = selector({
  key: "get/mostInfo",
  get: async ({ get }) => {
    const summonerName = get(summonerNameState);
    try {
      const response = await getMostInfoApi(summonerName);
      return response;
    } catch (err) {
      throw Error("잘못된 요청입니다.");
    }
  },
});

export const getMatchs = selector({
  key: "get/matchs",
  get: async ({ get }) => {
    const summonerName = get(summonerNameState);
    try {
      const response = await getMatchsApi(summonerName);
      return response;
    } catch (err) {
      throw Error("잘못된 요청입니다.");
    }
  },
});

export const historyState = atom({
  key: "history",
  default: [],
  effects: [localStorageEffect("history")],
});

export const bookmarkState = atom({
  key: "bookmark",
  default: [],
  effects: [localStorageEffect("bookmark")],
});
