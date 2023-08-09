import { styled } from 'styled-components';
import theme from 'styles/theme';
import { font } from 'styles/font';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: ${theme.grey[100]};
`;

export const Contents = styled.div`
  padding: 120px calc((100% - 1032px) / 2) 128px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  max-width: 1032px;
`;

export const Banner = styled.div`
  height: 100px;
  background-color: ${theme.grey[500]};
  border-radius: 8px;
`;

export const Filter = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  gap: 8px;
`;

export const Reset = styled.div`
  box-sizing: border-box;
  border: 1px solid ${theme.grey[500]};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
`;

export const Title = styled.span`
  ${font.$title01}
`;

export const ProjectList = styled.div`
  display: flex;
  gap: 36px;
  flex-direction: column;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;
