import styled from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const ModalContainer = styled.div`
  max-width: 504px;
  width: 65vw;
  background-color: ${theme.white};
  display: inline-flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
  border-radius: 12px;
  height: 20rem;
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
  gap: 6px;
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
