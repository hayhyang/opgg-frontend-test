import { memo, useEffect, useState } from "react";
import styled from "styled-components";

import { getMatchDetailApi } from "pages/api/api";

import { returnBadge } from "lib/utils";
import { ellipsis } from "styles/modules";

import Avatar from "components/common/Avatar";
import Image from "next/image";

const MatchesGame = ({
  champion,
  gameType,
  isWin,
  createDate,
  gameLength,
  items,
  spells,
  stats,
  gameId,
  peak,
  summonerName,
  tierRankShort,
}: any) => {
  const buildIconBlue = `/images/icon-buildblue-p.png`;
  const buildIconRed = `/images/icon-buildred-p.png`;
  const arrowBlue = `/images/icon-viewdetail-blue.png`;
  const arrowRed = `/images/icon-viewdetail-red.png`;

  const [teams, setTeams] = useState([]);
  const killBadge = returnBadge(stats?.general?.largestMultiKillString);
  const scoreBadge = returnBadge(stats?.general?.opScoreBadge);

  useEffect(() => {
    async function getMatchDetailHandler() {
      const data = await getMatchDetailApi("OOPG", gameId);
      setTeams(data.teams);
    }
    getMatchDetailHandler();
  }, [gameId]);

  return (
    <Container isWin={isWin}>
      <Metadata>
        <Game>
          <GameType>{gameType}</GameType>
          <CreateDate>{createDate}</CreateDate>
          <Division />
          <Result>{isWin ? "승리" : "패배"}</Result>
          <GameLength>{gameLength}</GameLength>
        </Game>
        <Champions>
          <Champion>
            <Avatar src={champion.imageUrl} size="4.6rem" />
            <ChampionItems>
              {spells.map((el: any, i: number) => (
                <ChampionItem key={i}>
                  <Image src={el.imageUrl} width="22" height="22" alt="spell" />
                </ChampionItem>
              ))}
            </ChampionItems>
            <Peaks>
              {peak.map((el: any, i: number) => (
                <Peak key={i}>
                  <Image src={el} width="22" height="22" alt="peak" />
                </Peak>
              ))}
              {/* <Rune></Rune> */}
            </Peaks>
          </Champion>
          <Name>레오나</Name>
        </Champions>
        <Kda>
          <KdaValue>
            <strong>{stats?.general?.kill}</strong>&nbsp;/&nbsp;
            <span>
              <strong>{stats?.general?.death}</strong>
            </span>
            &nbsp;/&nbsp;
            <strong>{stats?.general?.assist}</strong>
          </KdaValue>
          <KdaString>
            <strong>1.50:1</strong> 평점
          </KdaString>
          {(killBadge || scoreBadge) && (
            <Badges>
              {killBadge && (
                <Badge
                  bgColor={killBadge?.bgColor}
                  borderColor={killBadge?.borderColor}
                >
                  {killBadge.string}
                </Badge>
              )}
              {scoreBadge && (
                <Badge
                  bgColor={scoreBadge?.bgColor}
                  borderColor={scoreBadge?.borderColor}
                >
                  {scoreBadge.string}
                </Badge>
              )}
            </Badges>
          )}
        </Kda>
        <Stats>
          <Level>레벨{champion.level}</Level>
          <CS>
            {stats?.general?.cs} ({stats?.general?.csPerMin}) CS
          </CS>
          <KillPart>킬관여 {stats?.general?.contributionForKillRate}</KillPart>
        </Stats>
        <Items>
          <ItemList>
            <ItemImages>
              {items.map((el: any, i: number) => (
                <Item key={i}>
                  <Image src={el.imageUrl} width="22" height="22" alt="item" />
                </Item>
              ))}
            </ItemImages>
            <Ward>
              <Item>
                <Image src="" width="22" height="22" alt="item" />
              </Item>
              <button>
                <Image
                  src={isWin ? buildIconBlue : buildIconRed}
                  width="22"
                  height="22"
                  alt="ward"
                />
              </button>
            </Ward>
          </ItemList>
          <Control>
            <ControlIcon>{}</ControlIcon>
            <ControlValue>제어와드 0</ControlValue>
          </Control>
        </Items>
        <Teams>
          {teams.map((el: any, idx: number) => (
            <Team key={idx}>
              {el?.players?.map((e: any, i: number) => (
                <li key={i}>
                  <Image
                    src={champion?.imageUrl}
                    width="16"
                    height="16"
                    alt={e.summonerName}
                  />
                  <ChampionName
                    className={summonerName === e.summonerName ? "on" : ""}
                  >
                    {e.summonerName}
                  </ChampionName>
                </li>
              ))}
            </Team>
          ))}
        </Teams>
      </Metadata>
      <More>
        <img src={isWin ? arrowBlue : arrowRed} alt="더보기" />
      </More>
    </Container>
  );
};

const Metadata = styled.div`
  flex-grow: 1;
  font-size: 1.1rem;
  line-height: 1.3rem;
  letter-spacing: -0.42px;
  display: flex;
  align-items: center;
  color: #555;
  & > div {
    height: 9.6rem;
  }
`;
const More = styled.button`
  display: block;
  flex-basis: 3rem;
  flex-shrink: 0;
  padding: 1.2rem 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const Game = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 7rem;
  justify-content: center;
  flex-shrink: 0;
`;

const GameType = styled.span`
  font-weight: bold;
  margin-bottom: 0.4rem;
`;

const CreateDate = styled.span``;
const Division = styled.span`
  width: 2.7rem;
  height: 0.1rem;
  margin: 0.3rem 0 0.5rem;
`;

const Result = styled.span`
  font-weight: bold;
  margin-bottom: 0.4rem;
`;

const GameLength = styled.span``;

const Champions = styled.div`
  flex-basis: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  padding: 15px 0 13px;
`;
const Champion = styled.div`
  display: flex;
`;

const Name = styled.div`
  font-size: 11px;
  letter-spacing: -0.42px;
  color: #555;
`;
const ChampionItems = styled.div`
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const ChampionItem = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 2px;
  overflow: hidden;
`;

const Peaks = styled(ChampionItems)``;
const Peak = styled(ChampionItem)`
  border-radius: 50%;
  overflow: hidden;
`;

const Kda = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 11.35rem;
  gap: 6px;
  flex-shrink: 0;
`;

const KdaValue = styled.div`
  font-family: Helvetica;
  font-size: 15px;
  letter-spacing: -0.58px;
  color: #555e5e;
  span {
    color: #d0021b;
  }
`;
const KdaString = styled.div`
  strong {
    color: #333333;
  }
`;
const Badges = styled.div`
  margin-right: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
`;
const Badge = styled.div<any>`
  padding: 3px 5px;
  border-radius: 15px;
  border: solid 1px;
  border-color: ${({ borderColor }) => borderColor};
  background-color: ${({ bgColor }) => bgColor};
  letter-spacing: -0.38px;
  color: #fff;
  font-size: 10px;
`;

const Stats = styled.div`
  flex-basis: 9rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  height: 13px;
  font-family: AppleSDGothicNeo;
  font-size: 11px;
  letter-spacing: -0.42px;
  color: #555e5e;
  padding-top: 13px;
`;
const Level = styled.div``;
const CS = styled.div``;
const KillPart = styled.div`
  font-size: 11px;
  letter-spacing: -0.42px;
  color: #d0021b;
`;

const Items = styled.div`
  flex-basis: 11.35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 1.5rem 0 1.3rem;
`;
const ItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ItemImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  width: 72px;
`;
const Item = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 2px;
  overflow: hidden;
`;

const Ward = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 22px;
  gap: 2px;
  button {
    width: 22px;
    height: 22px;
    background: transparent;
  }
`;

const Control = styled.div`
  display: flex;
  align-items: center;
`;

const ControlIcon = styled.div``;
const ControlValue = styled.div`
  margin-left: 4px;
`;

const Teams = styled.div`
  flex-basis: 17rem;
  display: flex;
  align-items: center;
  padding: 0 3px;
`;

const Team = styled.div`
  &:not(:last-child) {
    margin-right: 1.3rem;
  }
  li {
    display: flex;
    align-items: center;
    &:not(:last-child) {
      margin-bottom: 2px;
    }
  }
`;

const ChampionName = styled.span`
  margin-left: 3px;
  width: 54px;
  font-size: 11px;
  letter-spacing: -0.42px;
  color: #555;
  ${ellipsis(1)}
  &.on {
    color: #000;
  }
`;

const Container = styled.div<any>`
  display: flex;
  height: 9.6rem;
  &:not(:last-child) {
    margin-bottom: 0.8rem;
  }
  ${Metadata} {
    border: solid 1px ${({ isWin }) => (isWin ? "#a1b8cd" : "#c0aba8")};
    background-color: ${({ isWin }) => (isWin ? "#b0ceea" : "#d6b5b2")};
  }

  ${More} {
    border: solid 1px ${({ isWin }) => (isWin ? "#549dc7" : "#c8817c")};
    background-color: ${({ isWin }) => (isWin ? "#7fb0e1" : "#e89c95")};
  }
  ${Result} {
    color: ${({ isWin }) => (isWin ? "#2c709b" : "#d0021b")};
  }
  ${Division} {
    background-color: ${({ isWin }) => (isWin ? "#94b9d6" : "#d0a6a5")};
  }
  ${Item} {
    background-color: ${({ isWin }) => (isWin ? "#7aa5c3" : "#cb9e9a")};
  }
`;
export default memo(MatchesGame);
