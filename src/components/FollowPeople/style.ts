import { styled } from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const Container = styled.div`
  width: 94%;
  height: 60px;
  display: flex;
  padding: 8px 12px;
  align-items: flex-start;
  border-radius: 4px;
  background: ${theme.white};
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  gap: 4px;
  align-items: center;
  ${font.$footnote};
  margin-left: 5px;
  cursor: pointer;

  &:first-child {
    margin-top: 5.5rem;
  }
`;

export const ImgWrapper = styled.img`
  width: 15%;
  height: 60px;
  border-radius: 3px;
`;

export const UserInfoContainer = styled.div`
  width: 250px;
  height: 50px;
  margin-left: 10px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

export const UserInfo = styled.div`
  color: ${theme.grey[600]};
  ${font.$subhead}
`;
