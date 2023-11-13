import styled from 'styled-components';
import { font } from 'styles/font';
import { shadow } from 'styles/shadow';
import theme from 'styles/theme';

export const Container = styled.div`
  max-width: 1032px;
  min-height: 120vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0 4rem 0;
  flex-direction: column;
`;

export const TextContainer = styled.div`
  width: calc(100% - 60px);
  min-height: 90vh;
  padding: 25px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
  background-color: white;
  border-radius: 12px;
`;

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Curcor = styled.div`
  cursor: pointer;
`;

export const TextBox = styled.div`
  width: 95%;
  margin: 0 auto;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  padding: 1rem 0 1rem 0;
`;

export const Description = styled.textarea`
  width: 100%;
  min-height: 70vh;
  resize: none;
  ${shadow.shadow2};
  padding: 12px;
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 24px;
`;

export const ImgContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  min-height: 25vh;
  padding-bottom: 3rem;
`;

export const ImgTitle = styled.div`
  width: 100%;
  height: 28px;
  color: ${theme.grey[800]};
`;

export const AddImgContainer = styled.div`
  width: 100%;
  height: 20vh;
`;

export const UploadedImage = styled.img`
  max-width: 142px;
  height: 142px;
  border-radius: 12px;
`;

export const UploadImage = styled.label`
  width: 30%;
  height: 245px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.label<{ url: string }>`
  background: url(${({ url }) => url}) lightgray 50% / cover no-repeat;
  height: 132px;
  width: 132px;
  border-radius: 5px;
  position: absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  border: 1px dashed ${theme.grey[800]};
  background-color: white;
`;

export const Input = styled.input`
  margin-left: 1px;
  margin-top: 2px;
  display: none;
`;

export const UploadWrapper = styled.div`
  position: absolute;
  margin-left: 3rem;
  margin-top: 2.8rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubmitBtn = styled.div`
  display: flex;
  width: 152px;
  padding: 15px 0px;
  color: white;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${theme.darkGreen};
  &:hover {
    transition: 0.2s ease-in-out;
    background-color: ${theme.darkGreen2};
  }
  &:active {
    transition: 0.2s ease-in-out;
    background-color: ${theme.darkGreen2};
    color: gray;
  }
`;

export const CreateBoardTitle = styled.div`
  margin: 0 auto;
  ${font.$title01}
  margin-bottom: 1rem;
`;
