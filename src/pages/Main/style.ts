import exp from 'constants';
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
`;

export const CoverImage = styled.img`
  width: 830px;
  position: absolute;
  right: 40px;
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 118px;
  display: flex;
  align-items: center;
`;

export const Photo = styled.div`
  width: 440px;
  height: 290px;
  border-radius: 30px;
  ${shadow.shadow2};
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 290px;
  margin-left: 88px;
`;

export const Title2 = styled.div`
  ${font.$title01};
  margin-top: 24px;
  width: 504px;
`;
