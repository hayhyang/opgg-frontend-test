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
  if (position === "TOP") return "/images/positions/top.svg";
  if (position === "MID") return "/images/positions/middle.svg";
  if (position === "ADC") return "/images/positions/bottom.svg";
  if (position === "SUP") return "/images/positions/support.svg";
  if (position === "JNG") return "/images/positions/jungle.svg";
};

export const getRoleRate = (positions: any) => {
  return positions;
};

export const returnBadge = (badge: string) => {
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

export const getLocalStorage = (key: string) => {
  const list = window.localStorage.getItem(key);
  if (list) return JSON.parse(list);
  else return [];
};

export const setLocalStorage = (key: string, value: string) => {
  const arr = getLocalStorage(key);
  console.log("arr", arr, value);
  let updateArr = [];
  if (arr.includes(value)) {
    updateArr = [...arr].filter((el) => el !== value);
  } else {
    updateArr = [...arr, value];
  }
  console.log("updateArr", updateArr);
  window.localStorage.setItem(key, JSON.stringify(updateArr));
};

export const returnWinColor = (value: number) => {
  if (value >= 60) return "#c6443e";
  else return "#555";
};

export const returnKDAColor = (kda: number) => {
  if (kda >= 5.0) return "#e19205";
  if (kda >= 4.0) return "#1f8ecd";
  if (kda >= 3.0) return "#2daf7f";
  if (kda < 3.0) return "#5e5e5e";
};
