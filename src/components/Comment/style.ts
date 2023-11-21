import styled from 'styled-components';
import theme from 'styles/theme';

export const CommentContainer = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
`;

export const ProfileContainer = styled.div`
  width: 8%;
  min-height: 100px;
  display: flex;
  margin-top: 0.5rem;
  justify-content: center;
`;

export const ProfileChatContainer = styled.div`
  width: 92%;
  min-height: 100%;
  padding-left: 0.6rem;
`;

export const ProfileChatTitle = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 13rem;
`;

export const DateView = styled.div`
  font-size: 15px;
  color: ${theme.grey[500]};
`;

export const CountView = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${theme.grey[500]};
`;

export const UserView = styled.div`
  font-size: 19px;
  font-weight: 500;
`;

export const Circle = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
`;

export const CommentWrapper = styled.div`
  width: 100%;
  margin-top: 5px;
  min-height: 50px;
  padding-bottom: 25px;
  color: ${theme.grey[800]};
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  width: 52px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.primary};
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const DetailComment = styled.div`
  cursor: pointer;
  margin-bottom: 0.5rem;
  color: ${theme.grey[600]};
`;

export const FlexBox = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
`;

export const Btn = styled.div`
  cursor: pointer;
`;
