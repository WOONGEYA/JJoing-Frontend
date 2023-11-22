import { styled } from 'styled-components';
import { font } from 'styles/font';
import { shadow } from 'styles/shadow';
import theme from 'styles/theme';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 92px;
  border-radius: 4px;
  ${shadow.shadow2};
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 15px;
`;

export const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 0.2rem;
  background-color: orange;
`;

export const UserInfoContainer = styled.div`
  width: 250px;
  height: 60px;
  margin-left: 15px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

export const UserInfo = styled.div`
  color: ${theme.grey[600]};
  ${font.$subhead}
`;
