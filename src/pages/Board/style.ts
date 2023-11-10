import styled from '@emotion/styled';
import theme from 'styles/theme';

export const Container = styled.div`
  max-width: 1032px;
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
  cursor: pointer;
`;

export const ProfileInfoContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-between;
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
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${theme.primary};
  color: white;
  &:hover {
    transition: 0.2s ease-in-out;
    background-color: ${theme.darkGreen};
  }
  &:active {
    background-color: ${theme.darkGreen};
    color: ${theme.grey[700]};
  }
`;
