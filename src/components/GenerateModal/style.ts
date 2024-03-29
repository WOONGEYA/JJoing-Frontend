import styled from 'styled-components';
import { font } from 'styles/font';
import { shadow } from 'styles/shadow';
import theme from 'styles/theme';

export const Container = styled.div`
  width: 500px;
  background-color: ${theme.white};
  border-radius: 12px;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 95vh;
  overflow-y: scroll;
  overflow-x: clip;
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
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const HeadLine = styled.h3`
  ${font.$headline};
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  height: 245px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TagArea = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  border-radius: 30px;
  height: 100%;
  padding: 8px 16px;
  max-width: 428px;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  gap: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${shadow.shadow2};
`;

export const UploadedImage = styled.img`
  max-width: 100%;
  height: 255px;
  border-radius: 5px;
`;

export const TagInner = styled.div`
  ${font.$footnote};
  position: absolute;
  cursor: pointer;
`;

export const ProfileImage = styled.label<{ url: string }>`
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url(${({ url }) => url}) lightgray 50% / cover no-repeat;
  height: 26vh;
  width: 92%;
  border-radius: 5px;
  position: absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

export const Profile = styled.div`
  width: 109%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TagContent = styled.span`
  max-width: 392px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
`;
