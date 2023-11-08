import { styled } from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const Container = styled.div`
  width: 94%;
  height: 60px;
  display: flex;
  padding: 8px 12px;
  align-items: flex-start;
  border-radius: 4px;
  background: ${theme.white};
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  gap: 4px;
  align-items: center;
  ${font.$footnote};
  margin-left: 5px;

  &:first-child {
    margin-top: 5.5rem;
  }
`;
