import { styled } from 'styled-components';
import theme from 'styles/theme';
import { font } from 'styles/font';

export const Contents = styled.div`
  max-width: 1032px;
  width: calc(100% - 2rem);
  padding: 64px calc((100% - 1032px) / 2) 128px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
`;

export const Banner = styled.div`
  height: 100px;
  background-color: ${theme.grey[400]};
  border-radius: 8px;
`;

export const Filter = styled.div`
  display: flex;
  gap: 8px;
`;

export const Reset = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  background-color: ${theme.white};
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.span`
  ${font.$title01}
`;

export const ProjectList = styled.div`
  display: flex;
  gap: 36px;
  flex-direction: column;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  cursor: pointer;
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;
