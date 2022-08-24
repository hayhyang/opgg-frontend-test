import Image from "next/image";
import styled from "styled-components";

const Visual = () => {
  return (
    <Container>
      <Image
        src="/images/home-visual.webp"
        alt="소환사 검색"
        width="300"
        height="200"
      />
    </Container>
  );
};

const Container = styled.div`
  padding: 32px 0 24px;
`;

export default Visual;
