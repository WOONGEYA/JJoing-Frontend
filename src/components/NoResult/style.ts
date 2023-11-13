import styled, { keyframes } from 'styled-components';
import theme from 'styles/theme';

const pulsate = keyframes`
  0% { font-size: 1.5rem; }
  50% { font-size: 2em; }
  100% { font-size: 1.5rem; }
`;

export const Shine = styled.div`
  text-align: center;
  color: ${theme.grey[800]};
  animation: ${pulsate} 3s ease-in-out infinite;
  margin-top: 10rem;
`;
