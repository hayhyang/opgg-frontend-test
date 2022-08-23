import PositionTop from "assets/icons/positions/top.svg";
import PositionBot from "assets/icons/positions/bottom.svg";
import PositionMid from "assets/icons/positions/middle.svg";
import PositionJng from "assets/icons/positions/jungle.svg";
import PositionSup from "assets/icons/positions/support.svg";

export const getWinningRate = (wins: number, losses: number) => {
  return Math.round((wins / (wins + losses)) * 100);
};

export const getTier = (tierRank: any) => {
  return `${tierRank?.tier} ${tierRank?.shortString.match(/\d+/)[0]}`;
};

export const getKDA = (kills: number, assists: number, deaths: number) => {
  return Number(((kills + assists) / deaths).toFixed(2));
};

export const getPositionName = (positionName: string) => {
  if (positionName === "Top") return "탑";
  if (positionName === "Middle") return "미들";
  if (positionName === "Bottom") return "바텀";
  if (positionName === "Support") return "서포터";
  if (positionName === "Jungle") return "정글";
};

export const getPositionIcon = (position: string) => {
  if (position === "TOP") return PositionTop;
  if (position === "MID") return PositionMid;
  if (position === "ADC") return PositionBot;
  if (position === "SUP") return PositionSup;
  if (position === "JNG") return PositionJng;
};

export const getRoleRate = (positions: any) => {
  return positions;
};

export const returnBadge = (badge: string) => {
  if (badge === "Double Kill") {
    return {
      string: "더블 킬",
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
