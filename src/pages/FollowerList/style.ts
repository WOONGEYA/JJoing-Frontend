import { styled } from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const Container = styled.div`
  min-width: 450px;
  height: 450px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  overflow: scroll;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleContainer2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 20px;
  background-color: white;
`;

export const Search = styled.div`
  display: flex;
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
  width: 98%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputWrapper = styled.div`
  margin: 20px 0 20px 0;
`;

export const TopWrapper = styled.div`
  position: fixed;
  background-color: white;
  padding-top: 20px;
  top: 0;
  z-index: 3;
  margin: 0 auto;
`;

export const Icon = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
