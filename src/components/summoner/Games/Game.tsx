import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import { getMatchDetailApi } from "pages/api/api";

import useHover from "hooks/useHover";

import { getItem, getWard, returnBadge } from "lib/utils";
import { getGameLength, getTimeStamp } from "lib/day";
import { ellipsis } from "styles/modules";

import Avatar from "components/common/Avatar";
import WardRed from "assets/icons/ward-red.svg";
import WardBlue from "assets/icons/ward-blue.svg";
import { IFellowPlayer, IGameInfo, IImageObj, IItem, ITeam } from "types/types";
import { useRecoilValue } from "recoil";
import { getItems } from "recoil/state";

interface BadgeProps {
  bgColor: string;
  borderColor: string;
}

const Game = ({
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
}: IGameInfo) => {
  const buildIconBlue = `/images/icon-buildblue-p.png`;
  const buildIconRed = `/images/icon-buildred-p.png`;
  const arrowBlue = `/images/icon-viewdetail-blue.png`;
  const arrowRed = `/images/icon-viewdetail-red.png`;

  const [teams, setTeams] = useState([]);
  const killBadge = returnBadge(stats?.general?.largestMultiKillString);
  const scoreBadge = returnBadge(stats?.general?.opScoreBadge);
  const defaultItems = Array.from(Array(6).keys());

  const ward = getWard(stats);

  const { data: itemData } = useRecoilValue(getItems);
  console.log("itemData", itemData);
  console.log("items", items);

  const getItem = (imageUrl: string) => {
    const id = Number(imageUrl.split("/").pop()?.split(".")[0]);
    console.log("itemData", itemData[id]);
    const item = itemData[id];

    return item;
  };

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
        <Info>
          <GameType>{gameType}</GameType>
          <CreateDate>{getTimeStamp(createDate)}</CreateDate>
          <Division />
          <Result>{isWin ? "승리" : "패배"}</Result>
          <GameLength>{getGameLength(gameLength)}</GameLength>
        </Info>
        <Champions>
          <Champion>
            <Avatar src={champion?.imageUrl} size="4.6rem" />
            <ChampionItems>
              {spells?.map((el: IImageObj, i: number) => (
                <ChampionItem key={i}>
                  <Image src={el.imageUrl} width="22" height="22" alt="spell" />
                </ChampionItem>
              ))}
            </ChampionItems>
            <Peaks>
              {peak?.map((el: string, i: number) => (
                <Peak key={i}>
                  <Image src={el} width="22" height="22" alt="peak" />
                </Peak>
              ))}
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
                  {killBadge?.string}
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
          <Level>레벨{champion?.level}</Level>
          <CS>
            {stats?.general?.cs} ({stats?.general?.csPerMin}) CS
          </CS>
          <KillPart>킬관여 {stats?.general?.contributionForKillRate}</KillPart>
        </Stats>
        <Items>
          <ItemList>
            <ItemImages>
              {defaultItems?.map((i: number) => {
                if (items[i] && i !== items.length - 1)
                  return (
                    <Item key={i}>
                      <Tooltip width="227px">
                        <span>
                          <TooltipName>
                            {getItem(items[i].imageUrl).name}
                          </TooltipName>
                          <TooltipDescription
                            dangerouslySetInnerHTML={{
                              __html: getItem(items[i].imageUrl).description,
                            }}
                          />
                          <br />
                          <TooltipPrice>
                            <span>가격:&nbsp;</span>
                            <span className="yellow">
                              {getItem(items[i].imageUrl).gold.total}&nbsp;(
                              {getItem(items[i].imageUrl).gold.base})
                            </span>
                          </TooltipPrice>
                        </span>
                      </Tooltip>
                      <ItemImage>
                        <Image
                          src={items[i].imageUrl || ""}
                          width="22"
                          height="22"
                          alt="item"
                        />
                      </ItemImage>
                    </Item>
                  );
                else
                  return (
                    <Item key={i}>
                      <ItemImage />
                    </Item>
                  );
              })}
            </ItemImages>
            <Ward>
              <Item>
                <Tooltip width="227px">
                  <span>
                    <TooltipName>
                      {getItem(items[items.length - 1].imageUrl).name}
                    </TooltipName>
                    <TooltipDescription
                      dangerouslySetInnerHTML={{
                        __html: getItem(items[items.length - 1].imageUrl)
                          .description,
                      }}
                    />
                    <br />
                    <TooltipPrice>
                      <span>가격:&nbsp;</span>
                      <span className="yellow">
                        {getItem(items[items.length - 1].imageUrl).gold.total}
                        &nbsp;(
                        {getItem(items[items.length - 1].imageUrl).gold.base})
                      </span>
                    </TooltipPrice>
                  </span>
                </Tooltip>
                <Image
                  src={items[items.length - 1].imageUrl || ""}
                  width="22"
                  height="22"
                  alt="item"
                />
              </Item>
              <button>
                <Item>
                  <Tooltip width="40px">
                    <span>빌드</span>
                  </Tooltip>
                  <Image
                    src={isWin ? buildIconBlue : buildIconRed}
                    width="22"
                    height="22"
                    alt="ward"
                  />
                </Item>
              </button>
            </Ward>
          </ItemList>
          <Control>
            <ControlIcon>{isWin ? <WardBlue /> : <WardRed />}</ControlIcon>
            <ControlValue>제어와드 {ward}</ControlValue>
          </Control>
        </Items>
        <Teams>
          {teams.map((el: ITeam, idx: number) => (
            <Team key={idx}>
              {el?.players?.map((e: IFellowPlayer, i: number) => (
                <li key={i}>
                  <Image
                    src={champion?.imageUrl || ""}
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

const Info = styled.div`
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
const Badge = styled.div<BadgeProps>`
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

const Tooltip = styled.div<any>`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  font-size: 11px;
  line-height: 1.36;
  color: #fff;
  width: ${({ width }) => width};
  opacity: 0;
  visibility: hidden;
  bottom: 20px;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 100;
  a {
    text-decoration: none;
    color: inherit;
  }
  & > span {
    padding: 10px;
    background-color: #222727;
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
  }

  &:after {
    content: "";
    display: block;
    width: 0px;
    height: 0px;
    border-top: 8px solid #222727;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
  }
`;
const TooltipName = styled.span`
  color: rgb(0, 207, 188);
`;
const TooltipDescription = styled.span``;
const TooltipPrice = styled.span`
  span {
    &.yellow {
      color: rgb(255, 198, 89);
    }
  }
`;
const Item = styled.div`
  position: relative;
  &:hover {
    ${Tooltip} {
      opacity: 1;
      visibility: visible;
      bottom: 30px;
    }
  }
`;

const ItemImage = styled.div`
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

const Container = styled.div<IGameInfo>`
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
  ${ItemImage} {
    background-color: ${({ isWin }) => (isWin ? "#7aa5c3" : "#cb9e9a")};
  }
`;
export default memo(Game);
