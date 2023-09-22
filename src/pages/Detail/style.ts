import styled, { css } from 'styled-components';
import theme from 'styles/theme';
import { font } from 'styles/font';

const getBackgroundColor = (props: any) => {
  if (props.color === theme.primary)
    return css`
      background-color: ${theme.primary};
    `;
  else if (props.color === theme.secondary)
    return css`
      background-color: ${theme.secondary};
    `;
};

export const Container = styled.div`
  width: 100vw;
  height: 80rem;
  padding: 140px 204px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ProjectBox = styled.div`
  width: 100%;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.15);
  padding: 48px 42px 40px;
  box-sizing: border-box;
`;

export const MainContents = styled.div`
  width: 100%;
  border-bottom: 1.5px solid ${theme.grey[300]};
  padding: 0 0 20px;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 18px;
`;

export const Image = styled.img`
  width: 65%;
  height: 383px;
  background-color: #ccc;
  border-radius: 5px;
  overflow: hidden;
`;

// MainDescription
export const MainDesc = styled.div`
  padding: 0;
  width: 35%;
`;

export const Title = styled.h2`
  ${font.$title01};
  color: ${theme.grey[800]};
  margin-bottom: 18px;
`;

export const DeadLine = styled.h3`
  ${font.$subhead};
  color: ${theme.grey[500]};
`;

export const Member = styled.div`
  margin-top: 90px;
  margin-bottom: 28px;
`;
export const MemberIcon = styled.img`
  width: 16px;
`;

export const MemberTitle = styled.div`
  display: flex;
  gap: 5px;
  color: ${theme.secondary};
  ${font.$footnote};
`;

export const MemberImages = styled.div`
  display: flex;
  gap: 3px;
`;

export const MemberProfile = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50px;
  margin-top: 7px;
`;

export const ButtonGap = styled.div`
  width: 332px;
  height: 54px;
`;

export const Button = styled.button`
  cursor: pointer;
  color: white;
  width: 332px;
  height: 42px;
  border-radius: 6px;
  border: none;
  margin-top: 12px;
  ${getBackgroundColor};
  ${font.$body};
`;

export const CallOut = styled.h2`
  ${font.$title03};
`;

export const Description = styled.h3`
  color: ${theme.grey[600]};
  ${font.$body};
  width: 90%;
  margin-bottom: 30px;
`;

export const SubCallOut = styled.h3`
  color: ${theme.grey[800]};
  ${font.$headline};
  margin-top: 16px;
`;

export const Categories = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  width: 330px;
  padding: 12px 0;
`;

export const Category = styled.div`
  cursor: pointer;
  flex-shrink: 0;
  width: fit-content;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 999px;
  padding: 0 14px;
  box-sizing: border-box;
  ${font.$footnote};
`;

export const Projects = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
`;

export const Gap = styled.div`
  width: 350px;
  height: 42px;
`;
