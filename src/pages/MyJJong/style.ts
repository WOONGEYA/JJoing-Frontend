import styled from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const Container = styled.div`
  max-width: 1032px;
  margin: 0 auto;
  padding-top: 20vh;
  box-sizing: border-box;
  min-height: 100vh;
`;

export const Header = styled.div`
  width: 100%;
  height: 34px;
  margin-bottom: 30px;
`;

export const Title = styled.div`
  width: 192px;
  text-align: center;
  padding: 6px;
  color: ${theme.primary};
  border-bottom: 2px solid ${theme.primary};
  ${font.$body};
`;

export const Projects = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
`;

export const NoJJoingContainer = styled.div`
  width: 64.5rem;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NoJJoingText = styled.div`
  ${font.$title02};
  font-weight: 400;
`;
