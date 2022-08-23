import styled from "styled-components";

const Empty = ({ text }: { text: string }) => {
  return (
    <Container>
      <Icon>
        <img src="/images/icon-history-info.png" alt="history info" />
      </Icon>
      <Text>{text}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Icon = styled.span`
  width: 16px;
  height: 16px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Text = styled.span`
  font-size: 12px;
  line-height: 15px;
  color: rgb(102, 102, 102);
  margin-top: 20px;
  text-align: center;
`;

export default Empty;
