import Avatar from "components/common/Avatar";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { openSearchState, searchValueState } from "recoil/state";
import styled from "styled-components";
import { ISummoner } from "types/types";

const ResultItem = ({ name, profileImageUrl, previousTiers }: ISummoner) => {
  const router = useRouter();

  const setOpenSearchState = useSetRecoilState(openSearchState);
  const setSearchValue = useSetRecoilState(searchValueState);

  const handleClick = () => {
    router.push(`/summoner/${name}`);
    setOpenSearchState(false);
    setSearchValue("");
  };
  return (
    <Container onClick={handleClick}>
      <Avatar src={profileImageUrl} alt={name} size="36px" />
      <Metadata>
        <Name>{name}</Name>
        <Desc>{previousTiers[0]?.string}</Desc>
      </Metadata>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 6px 16px;
  height: 53px;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: rgb(232, 235, 254);
  }
`;

const Metadata = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
`;
const Name = styled.h6`
  font-size: 14px;
  line-height: 1.43;
  color: rgb(68, 81, 92);
`;
const Desc = styled.span`
  margin-top: 2px;
  line-height: 14px;
  font-size: 12px;
  color: rgb(102, 102, 102);
`;
export default ResultItem;
