import styled from 'styled-components';
import { font } from 'styles/font';

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  ${font.$headline}
`;
