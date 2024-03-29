import styled from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-sizing: inherit;
  transition: all 0.2s ease-out;
`;

export const Container = styled.div`
  min-width: 328px;
  width: 328px;
  border-radius: 10px;
  box-shadow: 2px 4px 20px 0px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  background-color: ${theme.white};
  transition: 0.75s cubic-bezier(0.19, 1, 0.22, 1);
  &:hover {
    box-shadow: 2px 4px 20px 0px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }
  &:hover ${Image} {
    transform: scale(1.2);
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  ${font.$title03}
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-word;
  overflow: hidden;
`;

export const Description = styled.p`
  ${font.$callout}
  white-space: wrap;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  word-break: break-word;
  overflow: hidden;
  display: -webkit-box;
  height: 84px;
`;

export const Footer = styled.div`
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-top: 1px solid ${theme.grey[400]};
`;

export const People = styled.h3`
  color: ${theme.secondary};
  ${font.$callout}
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 8px;
`;

export const MemberCount = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ImageContainer = styled.div`
  padding-top: 50%;
  width: 100%;
  position: relative;
  text-decoration: none;
  background-color: ${theme.grey[300]};
  overflow: hidden;
`;

export const HeartCount = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Like = styled.div`
  color: ${theme.secondary};
  ${font.$callout}
`;

export const NavigateContainer = styled.div`
  cursor: pointer;
`;
