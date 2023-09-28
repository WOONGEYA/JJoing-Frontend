import styled from 'styled-components';
import { font } from 'styles/font';
import { shadow } from 'styles/shadow';
import theme from 'styles/theme';

export const JJoingContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 20vh;
`;

export const MainTitle = styled.div`
  width: 60%;
  height: 100px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  ${font.$title01}
`;
export const Container = styled.div`
  margin: 0 auto;
  width: 60%;
  height: 92px;
  border-radius: 4px;
  ${shadow.shadow2};
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const Image = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  background-color: ${theme.grey[300]};
  margin-right: 16px;
`;

export const Element = styled.div`
  margin-left: 3px;
`;

export const Desciption = styled.h1`
  ${font.$body};
`;

export const Position = styled.div`
  margin-top: 5px;
  ${font.$callout};
  color: ${theme.grey[700]};
`;

export const CallOut = styled.h2`
  ${font.$callout};
  color: ${theme.grey[500]};
`;

export const Time = styled.h2`
  ${font.$callout};
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

export const SubTitle = styled.div`
  font-size: ${font.$title04};
  color: ${theme.grey[600]};
  margin-left: 4px;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
