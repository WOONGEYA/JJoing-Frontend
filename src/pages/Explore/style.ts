import { styled } from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;
  height: 1000vh;
  padding: 100px 200px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export const Categories = styled.div`
  width: 20rem;
  height: 1em;
`;

export const CTitle = styled.h1`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
`;

export const CSelects = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 30px;
  font-family: 'Pretendard';
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
`;

export const SInner = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Contents = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const SelectIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
