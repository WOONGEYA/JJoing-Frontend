import styled from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const Container = styled.div`
  padding: 5% 0 6% 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TextContainer = styled.div`
  max-width: 900px;
  padding: 3rem 4rem;
  min-height: 100vh;
  background-color: white;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;

export const TextBox = styled.div`
  width: 100%;
  height: 9.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  width: 100%;
  height: 60%;
  font-weight: 700;
  font-size: 32px;
  font-style: normal;
`;

export const UserInfoContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.grey[500]};
`;

export const DetialWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;

export const ProjectDetail = styled.div`
  width: 100%;
  height: 100%;
`;

export const Detail = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

export const DetailBox = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  color: ${theme.grey[500]};
`;

export const DetailDay = styled.div`
  color: ${theme.grey[600]};
`;

export const ProfileImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: gray;
`;

export const ProfileDetailBox = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  margin-left: 3%;
`;

export const UserName = styled.div`
  font-weight: 600;
`;

export const BoardDate = styled.div`
  color: ${theme.grey[500]};
`;

export const ProfileInfo = styled.div``;

export const ContentContainer = styled.div`
  width: 100%;
  min-height: 60vh;
  padding: 5vh 0 3vh 0;
  border-bottom: 1px solid ${theme.grey[500]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CountMessage = styled.div`
  width: 100%;
  height: 40px;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 16px;
  color: ${theme.grey[500]};
`;

export const Content = styled.div`
  line-height: 3ch;
  color: ${theme.grey[800]};
  font-size: 20px;
`;

export const MessageWrapper = styled.div`
  width: 100%;
  height: 30%;
  padding: 2.5rem 0 2.5rem 0;
`;

export const FlexBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;