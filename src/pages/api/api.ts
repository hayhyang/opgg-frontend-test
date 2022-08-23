const BASE_URL = "https://codingtest.op.gg/api";

const SUMMONER_URL = `${BASE_URL}/summoner`;

export function getSummonerApi(summonerName: string) {
  return fetch(`${SUMMONER_URL}/${summonerName}`).then((response) =>
    response.json()
  );
}

export function getMostInfoApi(summonerName: string) {
  return fetch(`${SUMMONER_URL}/${summonerName}/mostInfo`).then((response) =>
    response.json()
  );
}

export function getMatchsApi(summonerName: string) {
  return fetch(`${SUMMONER_URL}/${summonerName}/matches`).then((response) =>
    response.json()
  );
}
export function getMatchDetailApi(summonerName: string, gameId: string) {
  return fetch(`${SUMMONER_URL}/${summonerName}/matchDetail/${gameId}`).then(
    (response) => response.json()
  );
}

export function getItemsApi() {
  return fetch(
    "http://ddragon.leagueoflegends.com/cdn/10.15.1/data/ko_KR/item.json"
  ).then((response) => response.json());
}
