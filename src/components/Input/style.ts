import styled from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const InputContainer = styled.div`
  display: flex;
  padding: 12px 16px;
  align-items: flex-start;
  border-radius: 4px;
  background: ${theme.white};
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  gap: 4px;
  align-items: center;
  ${font.$footnote}
`;
