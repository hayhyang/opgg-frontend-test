import { getPositionIcon, getPositionName, getWinningRate } from "lib/utils";
import styled from "styled-components";

const Position = ({
  position,
  positionName,
  games,
  wins,
  losses,
  getRoleRate,
}: any) => {
  const roleRate = getRoleRate(games);

  return (
    <Container>
      {/* <Icon>{getPositionIcon(position)}</Icon> */}
      <Metadata>
        <Name>{getPositionName(positionName)}</Name>
        <Rates>
          <RoleRate>{roleRate}%</RoleRate>
          <WinningRate>
            승률 <strong>{getWinningRate(wins, losses) || 0}</strong>%
          </WinningRate>
        </Rates>
      </Metadata>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Metadata = styled.div`
  margin-left: 0.8rem;
`;
const Name = styled.div`
  font-family: NanumBarunGothicOTF;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: #333;
  margin-bottom: 0.3rem;
`;
const Rates = styled.div`
  display: flex;
  align-items: center;
`;
const RoleRate = styled.span`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.3rem;
  color: #1f8ecd;
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 1.2rem;
    margin: 0 0.6rem;
    background-color: #cdd2d2;
  }
`;
const WinningRate = styled.span`
  color: #666666;
  strong {
    color: #333333;
  }
`;

export default Position;
