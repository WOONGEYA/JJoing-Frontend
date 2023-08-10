import styled from 'styled-components';
import { font } from 'styles/font';
import { shadow } from 'styles/shadow';
import theme from 'styles/theme';

export const Container = styled.div`
  width: 100%;
  height: 92px;
  border-radius: 4px;
  ${shadow.$shadow02.shadow2};
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  background-color: ${theme.grey[300]};
  margin-right: 16px;
`;

export const Element = styled.div``;

export const Desciption = styled.h1`
  ${font.$body.body};
`;

export const CallOut = styled.h2`
  ${font.$callout.callout};
  color: ${theme.grey[500]};
`;

export const Time = styled.h2`
  ${font.$callout.callout};
  color: ${theme.grey[800]};
`;

export const Icon = styled.img`
  width: 100%;
  height: 18px;
`;

export const Else = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
`;
