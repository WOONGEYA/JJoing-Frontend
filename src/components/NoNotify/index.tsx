import styled from 'styled-components';
import bell from 'assets/NoNotify.svg';
import { font } from 'styles/font';
import theme from 'styles/theme';

const Container = styled.div`
  width: 100%;
  height: 20rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Image = styled.img`
  width: 88px;
  margin-bottom: 36px;
`;

const Description = styled.h2`
  ${font.$title03};
  color: ${theme.grey[500]};
`;

const NoNotify = () => {
  return (
    <>
      <Container>
        <Image src={bell} />
        <Description>새로운 알림이 없습니다.</Description>
      </Container>
    </>
  );
};

export default NoNotify;
