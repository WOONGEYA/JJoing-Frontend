import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { font } from 'styles/font';
import { shadow } from 'styles/shadow';
import theme from 'styles/theme';

interface TabButtonProps {
  active?: boolean;
}

export const Container = styled.div`
  width: 100vw;
`;

export const FirstBox = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
`;

export const MainBox = styled.div`
  width: 100%;
  height: 100vh;
  padding: 220px 204px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;
`;

export const MainContents = styled.div`
  padding: 241px 204px;
  z-index: 2;
  position: relative;
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

export const CoverImage = styled.img`
  width: 830px;
  position: absolute;
  right: 15vw;
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

export const Tabs = styled.div`
  width: 43px;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export const TabButton = styled.button<TabButtonProps>`
  width: 46px;
  height: 46px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background-color: ${({ active }) => (active ? theme.primary : 'white')};
  color: ${({ active }) => (active ? 'white' : theme.primary)};
  border: ${({ active }) => (active ? 'none' : `2px solid ${theme.primary}`)};
  cursor: pointer;
`;

export const Image = styled.img`
  width: 512px;
  height: 512px;
  margin-left: 8px;
`;

export const Description = styled.div`
  height: 100%;
`;

export const SmallTitle = styled.h1`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${theme.primary};
`;

export const Caption = styled.p`
  ${font.$title02};
  width: 80%;
`;

export const Card = styled.div`
  width: 292px;
  height: 392px;
  border-radius: 40px;
  ${shadow.shadow1};
  padding: 48px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 26px;
  align-items: center;
`;

export const CardTitle = styled.h1`
  width: 100%;
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
`;

export const GoProjects = styled(Link)`
  width: 100%;
  font-size: 23px;
  font-weight: 300;
  line-height: 150%;
  text-decoration: none;
  color: ${theme.secondary};
  ${font.$callout};
`;

export const CardImage = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 38px;
`;
