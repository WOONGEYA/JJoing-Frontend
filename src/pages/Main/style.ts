import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { font } from 'styles/font';
import { shadow } from 'styles/shadow';
import theme from 'styles/theme';

export const Container = styled.div`
  width: 100vw;
`;

export const MainBox = styled.div`
  width: 100%;
  height: 100vh;
  ${shadow.shadow1}
`;

export const MainContents = styled.div`
  padding: 241px 204px;
  box-sizing: border-box;
`;

export const Title = styled.p`
  ${font.$hugeTitle};
`;

export const Emphasis = styled.span`
  ${Title};
  color: ${theme.primary};
  font-weight: 700;
`;

export const SubTitle = styled.span`
  ${font.$subTitle};
  margin-top: 12px;
`;

export const Button = styled(Link)`
  ${shadow.shadow2};
  border-radius: 20px;
  padding: 12px 47px;
  box-sizing: border-box;
  text-decoration: none;
  color: ${theme.black};
  ${font.$callout};
  &:hover {
    background-color: ${theme.grey[300]};
    transition: 0.2s ease-in-out;
  }
  &:active {
    background-color: ${theme.grey[600]};
  }
`;
