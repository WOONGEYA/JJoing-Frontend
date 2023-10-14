import styled from 'styled-components';
import theme from 'styles/theme';
import { font } from 'styles/font';

export const DropdownContainer = styled.div`
  position: relative;
  background-color: ${theme.white};
  border-radius: 4px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  user-select: none;
  width: 160px;
`;

export const Container = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  padding: 8px 8px 8px 16px;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: ${theme.grey[200]};
  }
`;

export const DropdownWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: space-between;
`;

export const CurrentOption = styled.span`
  ${font.$callout}
  ${theme.black}
`;

export const Options = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  margin-top: 6px;
  z-index: 2;
  background-color: ${theme.white};
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

export const Option = styled.div`
  color: ${theme.black};
  padding: 8px 16px;
  cursor: pointer;
  ${font.$callout};
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: ${theme.grey[200]};
  }
`;
