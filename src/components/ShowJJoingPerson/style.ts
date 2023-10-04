import styled from 'styled-components';
import { font } from 'styles/font';
import { shadow } from 'styles/shadow';
import theme from 'styles/theme';

interface ButtonProps {
  color: string;
}

export const ModalContainer = styled.div`
  max-width: 504px;
  width: 65vw;
  background-color: ${theme.white};
  display: inline-flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
  border-radius: 12px;
  height: 29rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const Title = styled.h1`
  ${font.$title03}
  ${theme.black}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  align-self: stretch;
`;

export const ContentTitle = styled.h2`
  color: ${theme.black};
  ${font.$headline};
  margin-bottom: 4px;
`;

export const Profile = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 1rem;
`;

export const Button = styled.div<ButtonProps>`
  width: 90px;
  height: 35px;
  background-color: ${(props) => props.color};
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
`;

export const Description = styled.textarea`
  width: 500px;
  height: 80px;
  resize: none;
  ${shadow.shadow2};
  padding: 16px 12px;
  box-sizing: border-box;
  border-radius: 4px;
`;

export const GoProfileText = styled.div`
  margin: 10px 0 10px 0;
  ${font.$body}
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 500px;
  height: 92px;
  border-radius: 4px;
  ${shadow.shadow2};
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 0.2rem;
  background-color: orange;
`;

export const UserInfoContainer = styled.div`
  width: 250px;
  height: 60px;
  margin-left: 15px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

export const UserInfo = styled.div`
  color: ${theme.grey[600]};
  ${font.$title04}
`;
