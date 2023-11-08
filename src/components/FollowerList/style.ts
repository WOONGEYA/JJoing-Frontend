import { styled } from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const Container = styled.div`
  min-width: 450px;
  height: 480px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  ${font.$title03};
  ${theme.black};
  margin: 0 auto;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

export const ScrollContainer = styled.div`
  width: 100%;
  background-color: blue;
`;
