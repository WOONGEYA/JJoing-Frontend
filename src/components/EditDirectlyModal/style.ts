import styled from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const Container = styled.div`
  display: flex;
  padding: 24px;
  gap: 32px;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;

export const Title = styled.h1`
  text-align: center;
  color: ${theme.black};
  ${font.$title03};
`;

export const Explanation = styled.span`
  text-align: center;
  color: ${theme.grey[700]};
  ${font.$body}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.div<{ color?: string }>`
  padding: 8px 20px;
  color: ${({ color }) => color};
  width: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  color: ${theme.white};
  ${font.$headline};
`;
