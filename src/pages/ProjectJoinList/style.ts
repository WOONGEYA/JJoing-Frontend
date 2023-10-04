import styled from 'styled-components';
import { font } from 'styles/font';
import { shadow } from 'styles/shadow';
import theme from 'styles/theme';

export const JJoingContainer = styled.div`
  width: 100%;
  padding-top: 20vh;
`;

export const TitleContainer = styled.div`
  width: 72%;
  height: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin: 0 auto;
  ${font.$title01};
  flex-direction: column;
`;
export const Container = styled.div`
  margin: 0 auto;
  width: 72%;
  height: 92px;
  border-radius: 4px;
  ${shadow.shadow2};
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 15px;
  margin-top: 40px;
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

export const MainTitle = styled.div`
  color: ${theme.grey};
`;

export const SubTitle = styled.div`
  font-size: ${font.$callout};
  color: ${theme.grey[600]};
  font-weight: 400;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const NoJJoingContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
