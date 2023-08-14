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
  height: 120rem;
  padding: 140px 204px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ProjectBox = styled.div`
  width: 100%;
  height: 58rem;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.15);
  padding: 48px 42px 40px;
  box-sizing: border-box;
`;

export const MainContents = styled.div`
  width: 100%;
  border-bottom: 1.5px solid ${theme.grey[300]};
  padding: 0 0 20px;
  display: flex;
  gap: 24px;
  margin-bottom: 18px;
`;

export const Image = styled.div`
  width: 100%;
  height: 370px;
  background-color: #ccc;
  border-radius: 5px;
`;

// MainDescription
export const MainDesc = styled.div`
  padding: 0;
`;

export const Title = styled.h2`
  ${font.$title01.title1};
  color: ${theme.grey[800]};
  margin-bottom: 18px;
`;

export const DeadLine = styled.h3`
  ${font.$subhead.subhead};
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
  ${font.$footnote.footnote};
`;

export const MemberImages = styled.div`
  display: flex;
  gap: 3px;
`;

export const MemberProfile = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50px;
`;

export const Button = styled.button`
  cursor: pointer;
  color: white;
  width: 350px;
  height: 42px;
  border-radius: 6px;
  border: none;
  margin-top: 12px;
  ${getBackgroundColor};
  ${font.$body.body};
`;

export const CallOut = styled.h2`
  ${font.$title03.title3};
`;

export const Description = styled.h3`
  color: ${theme.grey[600]};
  ${font.$body.body};
  width: 90%;
  margin-bottom: 30px;
`;

export const SubCallOut = styled.h3`
  color: ${theme.grey[800]};
  ${font.$headline.headline};
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
  ${font.$footnote.footnote};
`;

export const Projects = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
`;
