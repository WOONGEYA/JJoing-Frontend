import styled from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const Container = styled.div`
  width: 100vw;
  height: 120rem;
  padding: 140px 204px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
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
