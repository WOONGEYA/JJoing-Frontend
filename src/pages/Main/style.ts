import styled from 'styled-components';
import theme from 'styles/theme';
import { font } from 'styles/font';

export const Banner = styled.div`
  width: 100%;
  height: 500px;
  background-color: black;
`;

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: ${theme.grey[100]};
`;

export const Contents = styled.div`
  padding-top: 56px;
`;

export const Projects = styled.div`
  padding: 64px calc((100% - 1032px) / 2) 128px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  max-width: 1032px;
`;

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const Trending = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 24px;
  height: 365px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.span`
  ${font.$title01}
`;

export const RecommendedContainer = styled(TrendingContainer)``;

export const Recommended = styled(Trending)``;
