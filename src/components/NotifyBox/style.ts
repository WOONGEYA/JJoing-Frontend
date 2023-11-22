import styled from 'styled-components';
import { font } from 'styles/font';
import { shadow } from 'styles/shadow';
import theme from 'styles/theme';

export const Container = styled.div`
  width: 100%;
  border-radius: 4px;
  ${shadow.shadow2};
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: white;
`;

export const Image = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  background-color: ${theme.grey[300]};
  margin-right: 16px;
`;

export const Element = styled.div`
  cursor: pointer;
`;

export const Description = styled.h1`
  ${font.$body};
`;

export const CallOut = styled.h2`
  ${font.$callout};
  color: ${theme.grey[500]};
`;

export const Time = styled.h2`
  ${font.$callout};
  color: ${theme.grey[800]};
`;

export const Else = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const SubTitle = styled.div`
  font-size: ${font.$callout};
  color: ${theme.grey[600]};
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
