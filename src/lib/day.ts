export const getTimeStamp = (timestamp = 0) => {
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

export const timeFormat = (num: number, singular: string) => {
  return num > 0 ? num + (num === 1 ? `${singular} ` : `${singular} `) : "";
};

export const getGameLength = (timestamp = 0) => {
  const seconds = Math.floor(timestamp % 60);
  const minutes = Math.floor((timestamp % 3600) / 60);
  const hours = Math.floor((timestamp % (3600 * 24)) / 3600);
  const days = Math.floor(timestamp / (3600 * 24));

  const secondsStr = timeFormat(seconds, "초");
  const minutesStr = timeFormat(minutes, "분");
  const hoursStr = timeFormat(hours, "시간");
  const daysStr = timeFormat(days, "일");

  return `${daysStr}${hoursStr}${minutesStr}${secondsStr}`.replace(/,\s*$/, "");
};
