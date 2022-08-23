import styled from "styled-components";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: string;
}

const Avatar = ({ src, alt, size }: AvatarProps) => {
  return (
    <Container size={size}>
      <img src={src} alt={alt} />
    </Container>
  );
};

const Container = styled.div<AvatarProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Avatar;
