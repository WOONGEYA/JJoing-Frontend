import styled from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const InputContainer = styled.div`
  display: flex;
  padding: 15px 20px;
  align-items: flex-start;
  background: ${theme.grey[100]};
  gap: 4px;
  align-items: center;
  ${font.$footnote}
  color: ${theme.grey[200]};
  border: 1px solid ${theme.grey[200]};
  border-radius: 30px;
`;

export const InputText = styled.input<{ type: string }>`
  width: ${({ type }) => (type === 'search' ? 'calc(100% - 20px)' : '100%')};
  background: ${theme.grey[100]};
`;
