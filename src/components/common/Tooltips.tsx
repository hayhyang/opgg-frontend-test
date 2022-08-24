import styled from "styled-components";

const Tooltips = ({ text }: { text: string }) => {
  return <Container dangerouslySetInnerHTML={{ __html: text }} />;
};

const Container = styled.div``;

export default Tooltips;
