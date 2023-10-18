import styled from 'styled-components';
import { font } from 'styles/font';
import { shadow } from 'styles/shadow';
import theme from 'styles/theme';

export const Container = styled.div`
  max-width: 1032px;
  padding-top: 20vh;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const NotifiHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5vh;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 12px;
`;

export const HeaderElement = styled.div`
  display: flex;
`;

export const NotifiAmount = styled.span`
  color: ${theme.grey[800]};
  ${font.$subhead};
`;

export const DeleteNotifi = styled.button`
  width: 155px;
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
