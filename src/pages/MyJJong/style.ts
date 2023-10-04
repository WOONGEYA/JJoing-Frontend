import styled from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const Container = styled.div`
  width: 100vw;
  padding: 140px 204px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10rem;
`;

export const Header = styled.div`
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-content: space-between;
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
