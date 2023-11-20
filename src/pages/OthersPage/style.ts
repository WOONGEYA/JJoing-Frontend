import styled from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const Contents = styled.div`
  max-width: 1032px;
  width: calc(100% - 2rem);
  padding: 64px calc((100% - 1032px) / 2) 128px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: calc(100vh - 252px);
`;

export const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const UserLinks = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

export const UserContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  width: 100%;
`;

export const UserImage = styled.div`
  width: 152px;
  height: 152px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: block;
  object-fit: cover;
  background-color: ${theme.grey[300]};
`;

export const UserName = styled.h1`
  color: ${theme.grey[900]};
  ${font.$title02};
`;
export const UserNickName = styled.div`
  color: ${theme.grey[600]};
  ${font.$body};
`;

export const UserPosition = styled.h2`
  color: ${theme.grey[800]};
  ${font.$body};
`;

export const StatusMessage = styled.h3`
  color: ${theme.grey[600]};
  ${font.$callout};
  white-space: pre-wrap;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const UserInformation = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Follow = styled.span`
  color: ${theme.grey[800]};
  ${font.$body};
`;

export const ButtonContainer = styled.div`
  width: 152px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  align-items: center;
`;

export const Tab = styled.div<{ id: number; selected: number }>`
  padding: 8px 24px;
  color: ${({ selected, id }) =>
    selected === id ? theme.primary : theme.grey[500]};
  border-bottom: 2px solid ${theme.grey[500]};
  ${font.$body};
  transition: 0.25s ease-in;
  cursor: pointer;
`;

export const UserWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const TabWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const Underline = styled.div<{ selected: number }>`
  position: absolute;
  border: 1px solid ${theme.primary};
  width: 50%;
  top: 100%;
  left: ${({ selected }) => (selected === 0 ? '0%' : '50%')};
  margin-top: -2px;
  transition: 0.25s ease-in;
`;

export const NoContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${font.$title03};
  width: 100%;
  height: 20vh;
`;

export const Names = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const FollowGap = styled.span`
  margin-left: 0.5rem;
`;

export const CountFollow = styled.span`
  cursor: pointer;
`;

export const FowllowGap = styled.span`
  margin-left: 0.5rem;
`;
