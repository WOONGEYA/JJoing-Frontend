import styled from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${theme.grey[200]};
`;

export const FooterWrapper = styled.div`
  max-width: 1032px;
  width: calc(100% - 2rem);
  display: flex;
  padding: 32px 0;
  margin: auto;
  flex-direction: column;
`;

export const Headlines = styled.div`
  color: ${theme.grey[600]};
  display: flex;
  gap: 24px;
  ${font.$body}
  justify-content: end;
`;

export const Headline = styled.h3`
  color: ${theme.grey[600]};
  ${font.$body}
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid ${theme.grey[600]};
`;

export const LogoContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const Service = styled.h2`
  color: ${theme.secondary};
  ${font.$title03}
`;

export const Information = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const Tel = styled.h4`
  ${font.$headline};
  color: ${theme.grey[700]};
`;

export const Email = styled(Tel)``;

export const Founders = styled(Tel)``;

export const Location = styled(Tel)``;

export const Copyright = styled(Tel)`
  color: ${theme.grey[600]};
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
