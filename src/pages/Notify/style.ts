import styled from 'styled-components';
import { font } from 'styles/font';
import { shadow } from 'styles/shadow';
import theme from 'styles/theme';

export const Container = styled.div`
  max-width: 1032px;
  padding-top: 10vh;
  min-height: calc(100vh - 243.5px);
  box-sizing: border-box;
  margin: 0 auto;
`;

export const NotificationHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 12px;
`;

export const HeaderElement = styled.div`
  display: flex;
`;

export const NotificationAmount = styled.span`
  color: ${theme.grey[800]};
  ${font.$subhead};
`;

export const DeleteNotification = styled.button`
  min-width: 160px;
  height: 38px;
  color: ${theme.grey[800]};
  ${font.$callout};
  display: flex;
  align-items: center;
  gap: 4px;
  border: none;
  border-radius: 4px;
  ${shadow.shadow2};
  background-color: ${theme.white};
  cursor: pointer;
  :hover {
    background-color: ${theme.grey[500]};
  }
`;

export const Notifications = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
