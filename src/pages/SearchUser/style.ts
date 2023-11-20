import styled from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const Container = styled.div`
  max-width: 1032px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 5% 0 5% 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const WriteContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
