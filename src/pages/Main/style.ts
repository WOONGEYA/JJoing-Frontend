import styled, { css } from 'styled-components';
import { font } from 'styles/font';
import { shadow } from 'styles/shadow';
import theme from 'styles/theme';

export const Container = styled.div`
  width: 100vw;
`;

export const Layout = styled.div`
  width: 100vw;
  max-width: 1200px; // 화면의 최대 너비를 1200px로 설정
  margin: 0 auto;
`;

export const Welcome = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
`;

export const Landing = styled.div`
  width: min(calc(100% - 2rem), 1032px);
  margin: auto;
  height: min(80%, 500px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const MainImage = styled.img`
  width: min(100%, 530px);
`;

export const WelcomeContent = styled.div`
  max-width: 100%;
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  color: ${theme.black};
  word-break: keep-all;
  white-space: pre-wrap;
  margin-bottom: 24px;
`;

export const Emphasis = styled.span`
  color: ${theme.primary};
`;

export const Subtitle = styled.h2`
  ${font.$body};
  color: ${theme.grey[600]};
  word-break: keep-all;
  white-space: pre-wrap;
  margin-bottom: 40px;
`;

export const Button = styled.span`
  display: flex;
  width: fit-content;
  padding: 12px 48px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${theme.primary};
  ${font.$title02}
  color: ${theme.white};
`;

export const Merit = styled.div`
  padding-block: 200px;
  margin-inline: auto;
  display: flex;
  width: min(calc(100% - 2rem), 1032px);
  gap: 96px;
  flex-direction: column;
`;

export const MeritContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  align-self: stretch;
  opacity: 0;
  transition: opacity 0.6s ease-in-out;
`;

export const MeritText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex: 1 0 0;
`;

export const MainMerit = styled.h1`
  ${font.$titleLarge};
`;

export const MeritDescription = styled.h2`
  ${font.$title03};
  color: ${theme.grey[600]};
  word-break: keep-all;
  white-space: pre-wrap;
`;

export const MeritImage = styled.div`
  display: flex;
  padding: 0px 24px;
  align-items: center;
  gap: 32px;
  width: calc(50% - 60px);
`;

export const Page = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Number = styled.div<{ $active?: string }>`
  display: flex;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid ${theme.primary};
  justify-content: center;
  align-items: center;
  ${font.$title03};
  ${({ $active }) =>
    $active === 'true'
      ? css`
          color: ${theme.white};
          background: ${theme.primary};
        `
      : css`
          color: ${theme.primary};
          background: ${theme.white};
        `};
`;

export const Image = styled.img`
  width: min(100%, 384px);
`;

export const Help = styled.div`
  margin-inline: auto;
  display: flex;
  width: min(calc(100% - 2rem), 1032px);
  flex-direction: column;
  align-items: flex-start;
  gap: 96px;
  margin-bottom: 120px;
`;

export const HelpContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  width: 100%;
`;

export const Tabs = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
`;

export const Tab = styled.div`
  display: inline-flex;
  padding: 43px 36px 38.694px 28px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 0px 40px 40px 40px;
  background: #fff;
  box-shadow: 2px 4px 20px 0px rgba(0, 0, 0, 0.05);
`;

export const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 48px;
  flex: 1 0 0;
`;

export const TabTitle = styled.h1`
  color: #000;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export const TabImage = styled.img`
  height: 6rem;
`;

export const Login = styled.span`
  display: flex;
  padding: 12px 38px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${theme.primary};
  ${font.$title03}
  color: ${theme.white};
  cursor: pointer;
`;
