import styled from 'styled-components';
import { font } from 'styles/font';
import { shadow } from 'styles/shadow';
import theme from 'styles/theme';

export const TagContainer = styled.div`
  display: flex;
  gap: 4px;
  background: ${theme.white};
  border-radius: 20px;
  padding: 8px 16px;
  ${shadow.shadow2}
  align-items: center;
`;

export const TagText = styled.p`
  color: ${theme.grey[900]};
  ${font.$footnote};
`;
