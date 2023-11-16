import { styled } from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const Container = styled.div`
  min-width: 450px;
  height: 450px;
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
  height: 26.25rem;
  overflow: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* 스크롤바의 너비 */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* 스크롤바의 배경 */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* 스크롤바 핸들 */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* 스크롤바 핸들 호버 */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const InputWrapper = styled.div`
  margin: 20px 0 20px 0;
`;

export const TopWrapper = styled.div`
  position: fixed;
  width: 93%;
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
