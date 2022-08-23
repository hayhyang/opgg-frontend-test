export interface IChampion {
  imageUrl?: string;
  level?: number;
}

export interface IChampionWinRate {
  id?: number;
  imageUrl?: string;
  key?: string;
  losses?: number;
  name?: string;
  wins?: number;
}

export interface IFellowPlayer {
  champion: IChampion;
  summonerId: string;
  summonerName: string;
}

export interface IGameInfo {
  champion: IChampion;
  createDate: number;
  gameId: string;
  gameLength: number;
  gameType: string;
  isWin: boolean;
  items: IImageObj[];
  mapInfo: IMapInfo;
  mmr: number;
  needRenew: boolean;
  peak: string[];
  spells: IImageObj[];
  stats: IGameInfoStats;
  summonerId: string;
  summonerName: string;
  tierRankShort: string;
}

export interface IGameInfoStats {
  general: General;
  ward: IWard;
}

export interface General {
  assist: number;
  contributionForKillRate: string;
  cs: number;
  csPerMin: number;
  death: number;
  goldEarned: number;
  kdaString: string;
  kill: number;
  largestMultiKillString: string;
  opScoreBadge: string;
  totalDamageDealtToChampions: number;
}

export interface IImageObj {
  imageUrl: string;
}

export interface ILadderRank {
  rank: number;
  rankPercentOfTop: number;
}

export interface ILeague {
  hasResults: boolean;
  losses: number;
  tierRank: ITierRank;
  wins: number;
}

export interface IMapInfo {
  imageUrl: string;
  mapId: number;
}

export interface IMatchDetailDTO {
  gameIId: string;
  teams: ITeam[];
}

export interface IMatchesDTO {
  champions: IChampion[];
  games: IGameInfo[];
  positions: [];
  summary: ISummary;
}

export interface IMostChampion {
  assists: number;
  cs: number;
  deaths: number;
  games: number;
  id: number;
  imageUrl: string;
  key: string;
  kills: number;
  losses: number;
  name: string;
  rank: number;
  wins: number;
}

export interface IMostInfoDTO {
  champions: IMostChampion[];
  recentWinRate: IChampionWinRate[];
}

export interface IPosition {
  games: number;
  losses: number;
  position: string;
  positionName: string;
  wins: number;
}

export interface ISummary {
  assists: number;
  deaths: number;
  kills: number;
  losses: number;
  wins: number;
}

export interface ISummoner {
  ladderRank: ILadderRank;
  leagues: ILeague[];
  level: number;
  name: string;
  previousTiers: ITierRank[];
  profileBackgroundImageUrl: string;
  profileBorderImageUrl: string;
  profileImageUrl: string;
  url: string;
}

export interface ISummonerDTO {
  summoner: ISummoner;
}

export interface ITeam {
  players: IFellowPlayer[];
  teamId: number;
}

export interface ITierRank {
  division: string;
  imageUrl: string;
  lp: number;
  name: string;
  season: number;
  shortString: string;
  string: string;
  tier: string;
  tierDivision: string;
  tierRankPoint: number;
}

export interface IWard {
  sightWardsBought: number;
  visionWardsBought: number;
}
