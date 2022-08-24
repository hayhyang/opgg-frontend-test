import styled from "styled-components";

import { ISummoner, ITierRank } from "types/types";

const Profile = ({
  name,
  ladderRank,
  level,
  profileImageUrl,
  previousTiers,
}: ISummoner) => {
  return (
    <Container>
      <Tags>
        {previousTiers?.map((el: ITierRank, i: number) => (
          <Tag key={i}>
            <strong>S{el?.season}</strong>
            &nbsp;
            {el?.tier}
          </Tag>
        ))}
      </Tags>
      <ProfileArea>
        <ProfileImage>
          <img src={profileImageUrl} alt={name} />
          <Level>{level}</Level>
        </ProfileImage>
        <Metadata>
          <Name>{name}</Name>
          <LadderRank>
            &nbsp;레더 랭킹&nbsp;
            <strong>{ladderRank?.rank}</strong>위 (상위&nbsp;
            {ladderRank?.rankPercentOfTop}%)
          </LadderRank>
        </Metadata>
      </ProfileArea>
    </Container>
  );
};

const Container = styled.div``;

const Tags = styled.ul`
  display: flex;
  margin-bottom: 0.6rem;
`;
const Tag = styled.li`
  font-size: 11px;
  line-height: 13px;
  border-radius: 2px;
  border: solid 1px #d0d3d4;
  background-color: #e0e3e3;
  padding: 4px 5px 3px 5px;
  letter-spacing: -0.42px;
  color: #657070;
  &:not(:last-child) {
    margin-right: 7px;
  }
`;

const ProfileArea = styled.div`
  padding: 1.1rem 0 0;
  display: flex;
`;
const ProfileImage = styled.div`
  position: relative;
  width: 12rem;
  height: 12rem;
  background-color: gray;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Level = styled.span`
  position: absolute;
  bottom: -0.2rem;
  left: 50%;
  transform: translateX(-50%);
  line-height: 1rem;
  background-color: #2c3548;
  padding: 3px 8px 4px;
  color: #eabd56;
  line-height: 1.7rem;
  font-family: Helvetica;
  font-size: 14px;
  text-align: center;
`;
const Metadata = styled.div`
  margin-left: 1.7rem;
  padding: 1.1rem 0 0;
`;
const Name = styled.h4`
  letter-spacing: -0.77px;
  color: #242929;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 4px;
  font-weight: 700;
`;
const LadderRank = styled.p`
  letter-spacing: -0.42px;
  color: #657070;
  font-size: 1.1rem;
`;

export default Profile;
