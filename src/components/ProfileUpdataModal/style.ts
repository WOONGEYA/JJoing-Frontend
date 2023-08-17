import styled from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const ModalContainer = styled.div`
  max-width: 504px;
  width: 50vw;
  background-color: ${theme.white};
  display: inline-flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
  border-radius: 12px;
  height: 38rem;
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
  gap: 8px;
  align-self: stretch;
`;

export const ContentTitle = styled.h2`
  color: ${theme.black};
  ${font.$headline};
`;

export const Profile = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.label<{ url: string }>`
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url(${({ url }) => url}) lightgray 50% / cover no-repeat;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;
