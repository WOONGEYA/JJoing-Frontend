import styled from '@emotion/styled';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const Container = styled.div`
  max-width: 1032px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 5% 0 5% 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BoardBoxContainer = styled.div`
  width: calc(100% - 30px);
  height: 67px;
  background-color: white;
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  &:hover {
    transition: 0.3s ease-in-out;
    background-color: ${theme.grey[100]};
  }
  cursor: pointer;
`;

export const ProfileInfoContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3%;
`;

export const ProjectDetail = styled.div`
  width: 100%;
  height: 30%;
`;

export const Detail = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
`;

export const DetailBox = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  color: ${theme.grey[600]};
`;

export const DetailDay = styled.div`
  color: ${theme.grey[600]};
  width: 50%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const detailContents = styled.div`
  color: ${theme.grey[600]};
`;

export const WriteContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WriterButton = styled.div`
  display: inline-flex;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${theme.primary};
  color: white;
  cursor: pointer;
  &:hover {
    transition: 0.2s ease-in-out;
    background-color: ${theme.darkGreen};
  }
  &:active {
    background-color: ${theme.darkGreen};
    color: ${theme.grey[700]};
  }
`;

export const Title = styled.div`
  font-size: 18px;
  cursor: pointer;
`;

export const UserProfile = styled.div`
  width: 5rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
`;

export const ProfileImg = styled.img`
  width: 2.8rem;
  height: 1.8rem;
  border-radius: 50%;
  cursor: pointer;
`;

export const NameContainer = styled.div`
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
