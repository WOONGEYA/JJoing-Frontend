import styled from 'styled-components';
import theme from 'styles/theme';
import { font } from 'styles/font';

export const Container = styled.div`
  box-sizing: border-box;
  border: 1px solid ${theme.grey[500]};
  border-radius: 15px;
  padding: 3px 5px 3px 11px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const OptionName = styled.span`
  ${font.$subhead.subhead}
`;
