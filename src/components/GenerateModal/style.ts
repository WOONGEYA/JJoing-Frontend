import styled from 'styled-components';
import { font } from 'styles/font';
import { shadow } from 'styles/shadow';
import theme from 'styles/theme';

export const Container = styled.div`
  width: 500px;
  height: 740px;
  background-color: ${theme.white};
  border-radius: 12px;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalTitle = styled.h1`
  ${font.$title03};
`;

export const ModalContents = styled.div`
  width: 100%;
`;

export const HeadLine = styled.h3`
  ${font.$headline};
  margin-bottom: 8px;
`;

export const InputArea = styled.div`
  margin-bottom: 16px;
`;

export const CheckBox = styled.input``;

export const Footnote = styled.span`
  ${font.$footnote};
  margin-right: 24px;
`;

export const Button = styled.button`
  width: 65px;
  height: 35px;
  color: ${theme.white};
  background-color: ${theme.primary};
  ${font.$callout};
  border-radius: 4px;
  float: right;
`;

export const Description = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
  ${shadow.shadow2};
  padding: 16px 12px;
  box-sizing: border-box;
  border-radius: 4px;
`;

export const UploadImage = styled.label`
  width: 100%;
  height: 212px;
  border-radius: 5px;
  border: 1px dashed ${theme.grey[600]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 98px;
`;
