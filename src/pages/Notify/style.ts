import styled from 'styled-components';
import { font } from 'styles/font';
import { shadow } from 'styles/shadow';
import theme from 'styles/theme';

export const Container = styled.div`
  width: 100vw;
  height: 120rem;
  padding: 140px 204px 0;
  box-sizing: border-box;
`;

export const NotifiHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 4px;
  ${shadow.shadow2};
  width: 328px;
  height: 38px;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 12px;
`;

export const Search = styled.input`
  width: 100%;
  height: 100%;
  border: none;
`;

export const HeaderElement = styled.div`
  display: flex;
`;

export const NotifiAmount = styled.span`
  color: ${theme.grey[800]};
  ${font.$subhead.subhead};
`;

export const DeleteNotifi = styled.button`
  width: 155px;
  height: 38px;
  color: ${theme.grey[800]};
  ${font.$callout.callout};
  display: flex;
  align-items: center;
  gap: 4px;
  border: none;
  border-radius: 4px;
  ${shadow.shadow2};
  background-color: ${theme.white};
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
