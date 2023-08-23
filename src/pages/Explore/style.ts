import { styled } from 'styled-components';
import theme from 'styles/theme';
import { font } from 'styles/font';

export const Contents = styled.div`
  max-width: 1032px;
  width: calc(100% - 2rem);
  padding: 64px calc((100% - 1032px) / 2) 128px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-left: auto;
  margin-right: auto;
`;

export const Banner = styled.div`
  height: 100px;
  background-color: ${theme.grey[500]};
  border-radius: 8px;
`;

export const Filter = styled.div`
  display: flex;
  gap: 8px;
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
