import styled from 'styled-components';
import { font } from 'styles/font';
import { shadow } from 'styles/shadow';
import theme from 'styles/theme';

export const Layout = styled.div`
  display: inline-flex;
  padding: 32px;
  align-items: flex-start;
  gap: 10px;
  background: ${theme.grey[100]};
  border-radius: 12px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  align-self: stretch;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: stretch;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const LogoContainer = styled.div`
  display: flex;
  height: 169px;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
`;

export const LoginGoggle = styled.div`
  display: flex;
  width: 328px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  ${font.$body};
  ${shadow.shadow2};
  cursor: pointer;
`;

export const Login = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${theme.black};
`;
