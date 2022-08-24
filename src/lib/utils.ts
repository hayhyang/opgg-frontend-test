import { useRecoilValue } from "recoil";
import { getItems } from "recoil/state";
import { IGameInfoStats, IItem, ITierRank } from "types/types";

export const getWinningRate = (wins = 0, losses = 0) => {
  return Math.round((wins / (wins + losses)) * 100);
};

export const getTier = ({ tier = "", shortString = "" }: ITierRank) => {
  return tier + shortString.match(/\d+/);
};

export const getKDA = (kills = 0, assists = 0, deaths = 0) => {
  return Number(((kills + assists) / deaths).toFixed(2));
};

export const getWard = ({
  ward: { sightWardsBought = 0, visionWardsBought = 0 },
}: IGameInfoStats) => {
  return sightWardsBought + visionWardsBought;
};

export const getPositionName = (positionName = "") => {
  if (positionName === "Top") return "탑";
  if (positionName === "Middle") return "미들";
  if (positionName === "Bottom") return "바텀";
  if (positionName === "Support") return "서포터";
  if (positionName === "Jungle") return "정글";
};

export const getPositionIcon = (position = "") => {
  if (position === "TOP") return "/images/positions/top.svg";
  if (position === "MID") return "/images/positions/middle.svg";
  if (position === "ADC") return "/images/positions/bottom.svg";
  if (position === "SUP") return "/images/positions/support.svg";
  if (position === "JNG") return "/images/positions/jungle.svg";
};

export const returnBadge = (badge = "") => {
  if (badge === "Double Kill") {
    return {
      string: "더블킬",
      bgColor: "#ec4f48",
      borderColor: "#bf3b36",
    };
  } else if (badge === "ACE") {
    return {
      string: badge,
      bgColor: "#8c51c5",
      borderColor: "#7f3590",
    };
  } else return null;
};

export const returnWinColor = (value = 0) => {
  if (value >= 60) return "#c6443e";
  else return "#555";
};

export const returnKDAColor = (kda = 0) => {
  if (kda >= 5.0) return "#e19205";
  if (kda >= 4.0) return "#1f8ecd";
  if (kda >= 3.0) return "#2daf7f";
  if (kda < 3.0) return "#5e5e5e";
};

export const localStorageEffect =
  (key = "") =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: string[], _: any, isReset: boolean) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };
