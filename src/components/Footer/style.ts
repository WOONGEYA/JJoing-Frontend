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
  padding: 40px 0;
  margin: auto;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  flex-direction: column;
  display: flex;
`;

export const Service = styled.h2`
  color: ${theme.secondary};
  ${font.$title03}
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Top = styled(Bottom)``;

export const Copyright = styled.span`
  ${font.$headline};
  color: ${theme.grey[600]};
`;

export const Team = styled(Copyright)`
  color: ${theme.grey[800]};
`;
