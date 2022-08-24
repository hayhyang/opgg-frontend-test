export const getTimeStamp = (timestamp: number) => {
  const today = new Date();
  const date = new Date(timestamp * 1000);

  const betweenTime = Math.floor(
    (today.getTime() - date.getTime()) / 1000 / 60
  );

  if (betweenTime < 1) return "방금전";

  if (betweenTime < 60) {
    return `${betweenTime}분전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년전`;
};

export const getGameLength = (timestamp: number) => {
  // const pad = (num: number) => ("0" + num).slice(-2);
  // const date = new Date(timestamp * 1000);
  // let hours = date.getHours(),
  //   minutes = date.getMinutes(),
  //   seconds = date.getSeconds();
  // return pad(hours) + "시간" + pad(minutes) + "분" + pad(seconds) + "초";
};
