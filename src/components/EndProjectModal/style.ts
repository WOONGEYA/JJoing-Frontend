import styled from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const ModalContainer = styled.div`
  min-width: 360px;
  height: 150px;
  background-color: ${theme.white};
  display: inline-flex;
  padding: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
  border-radius: 12px;
`;

export const ModalTextWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const MainText = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${font.$title03}
`;

export const SubText = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.grey[600]};
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
`;

export const CancleButton = styled.div`
  background-color: ${theme.grey[400]};
  width: 140px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.3rem;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: ${theme.grey[600]};
  }
`;

export const SuccessButton = styled.div`
  background-color: ${theme.warning};
  color: white;
  width: 140px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.3rem;
  cursor: pointer;
  &:hover {
    background-color: ${theme.red};
  }
`;
