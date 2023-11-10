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
  &:focus-within {
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
      rgba(17, 17, 26, 0.1) 0px 0px 8px;
  }
`;

export const InputText = styled.input<{ type: string }>`
  width: ${({ type }) => (type === 'search' ? 'calc(100% - 20px)' : '100%')};
  background: ${theme.grey[100]};
  &:focus {
    outline: none; // 기본 outline 스타일 제거
  }
`;
