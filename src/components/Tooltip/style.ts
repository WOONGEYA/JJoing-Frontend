import styled from 'styled-components';
import theme from 'styles/theme';

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  z-index: 5;
`;

export const TooltipText = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  background-color: ${theme.grey[500]};
  padding: 8px 12px;
  position: absolute;
  color: ${theme.white};
  top: 100%;
  border-radius: 4px;
`;
