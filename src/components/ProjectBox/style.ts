import { styled } from 'styled-components';

export const Container = styled.div`
  width: 317px;
  height: 307px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MainImg = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 20px;
`;

export const TextArea = styled.div`
  width: 100%;
  padding: 0 10px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TitleText = styled.h1`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 130%;
`;

export const SubTitle = styled.span`
  max-width: 180px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: #72787F;
`;

export const StateArea = styled.div`
  height: 20px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Statuses = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const Light = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #FFEA00;
`;

export const State = styled.h1`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;

export const Categories = styled.div`
  display: flex;
  gap: 18px;
`;

export const Category = styled.h1`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  color: #264466;
`;
