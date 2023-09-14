import styled from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

const Container = styled.div`
  width: 100%;
  height: 30%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Description = styled.h2`
  ${font.$title03.title3};
  color: ${theme.grey[500]};
  margin-top: 32px;
`;

const NoNotify = () => {
  return (
    <>
      <Container>
        <NoNotify />
        <Description>새로운 알림이 없습니다.</Description>
      </Container>
    </>
  );
};

export default NoNotify;
