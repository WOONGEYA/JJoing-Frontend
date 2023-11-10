import styled from 'styled-components';
import theme from 'styles/theme';

export const Back = styled.div`
  width: 100%;
  height: 50vh;
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SubmitBtn = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const MessageList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 3.5rem 0 1.5rem 0;
  gap: 1rem;
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
