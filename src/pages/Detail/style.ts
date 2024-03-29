import styled from 'styled-components';
import theme from 'styles/theme';
import { font } from 'styles/font';
import { Link } from 'react-router-dom';

export const Contents = styled.div`
  max-width: 1032px;
  width: calc(100% - 2rem);
  padding: 64px calc((100% - 1032px) / 2) 128px;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
`;

export const ProjectLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;
`;

export const ProjectInfo = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
`;

export const ProjectImageContainer = styled.div`
  position: relative;
  flex: 1 0 0;
`;

export const ProjectImage = styled.img`
  border-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

export const ProjectDetail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

export const ProjectBasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex: 1 0 0;
`;

export const ProjectName = styled.span`
  ${font.$title01};
  color: ${theme.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 68.5%;
  position: relative;
  width: 100%;
`;

export const Deadline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1 0 0;
`;

export const Recruiting = styled(Deadline)``;

export const DeadlineText = styled.div`
  ${font.$callout};
  color: ${theme.black};
  display: flex;
  gap: 8px;
  align-items: center;
`;
export const RecruitingText = styled(DeadlineText)``;

export const DeadlineDate = styled.p`
  ${font.$callout};
  color: ${theme.grey[700]};
`;

export const RecruitingMember = styled(DeadlineDate)``;

export const RecruitInfo = styled.div`
  display: flex;
  gap: 24px;
`;

export const ProjectMember = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;
`;

export const MemberText = styled.div`
  display: flex;
  gap: 4px;
  ${font.$callout};
  color: ${theme.secondary};
  align-items: center;
`;

export const Members = styled.div`
  display: flex;
  gap: 8px;
`;

export const MemberProfile = styled.img`
  width: 38px;
  height: 38px;
  border: 1px solid ${theme.black};
  border-radius: 50%;
  cursor: pointer;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 24px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const DescriptionText = styled.p`
  color: ${theme.secondary};
  ${font.$title03};
`;

export const DescriptionContent = styled.p`
  color: ${theme.grey[600]};
  ${font.$body};
  word-break: keep-all;
  white-space: pre-wrap;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CategoryText = styled.p`
  color: ${theme.grey[800]};
  ${font.$headline};
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Button = styled.button<{ cursor?: string }>`
  cursor: ${({ cursor }) => (!cursor ? 'pointer' : cursor)};
  color: white;
  border-radius: 4px;
  ${font.$body};
  background-color: ${(props) => props.color};
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
`;

export const SvgIcon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const DropdownContainer = styled.div`
  position: absolute;
  margin: 0.5rem 0 0 0.5rem;
`;

export const Options = styled.div`
  width: 120px;
  z-index: 3;
  background-color: ${theme.white};
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  text-decoration: none;
`;

export const Option = styled.div`
  color: ${theme.black};
  padding: 8px 16px;
  cursor: pointer;
  ${font.$callout};
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${theme.grey[200]};
  }
`;

export const ArrowContainer = styled(Link)`
  position: absolute;
  margin-left: -5%;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const TabKey = styled.div`
  position: relative;
`;
