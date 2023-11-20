import { styled } from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const ContentContainer = styled.div`
  width: 97.5%;
  height: 2rem;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  height: 55px;
  border-radius: 4px;
  padding: 0.8rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 55px;
  height: 55px;
`;

export const ImgWrapper = styled.img`
  width: 59px;
  height: 59px;
  border-radius: 3px;
`;

export const UserInfoContainer = styled.div`
  width: 85%;
  height: 50px;
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

export const UserInfo = styled.div`
  color: ${theme.grey[600]};
  ${font.$subhead}
`;

export const FollowBtn = styled.div`
  padding: 0.7rem 0.9rem;
  border-radius: 0.3rem;
  background-color: ${theme.grey[600]};
  color: white;
  margin-right: 0.2rem;
`;

export const FollowingBtn = styled.div`
  padding: 0.7rem 0.9rem;
  border-radius: 0.3rem;
  background-color: ${theme.grey[400]};
  color: ${theme.grey[800]};
  margin-right: 0.2rem;
`;

export const FollowBtnMy = styled.div`
  width: 7.5%;
  height: 1rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
