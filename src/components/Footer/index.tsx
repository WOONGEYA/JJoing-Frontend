import LogoIcon from 'assets/LogoIcon';
import GithubIcon from 'assets/GithubIcon';
import * as S from './style';

const WOONGEYA_GITHUB = 'https://github.com/WOONGEYA';

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterWrapper>
        <S.Content>
          <S.Top>
            <S.LogoContainer>
              <LogoIcon width={92} height={43} />
              <S.Service>사이드 프로젝트 모집 플랫폼</S.Service>
            </S.LogoContainer>
            <a href={WOONGEYA_GITHUB} target='_blank' rel='noreferrer'>
              <GithubIcon cursor='pointer' width={64} height={64} />
            </a>
          </S.Top>
          <S.Bottom>
            <S.Team>팀 웅이야 | 부산소프트웨어마이스터고등학교</S.Team>
            <S.Copyright>Copyright Woong ltd. All rights reserved.</S.Copyright>
          </S.Bottom>
        </S.Content>
      </S.FooterWrapper>
    </S.FooterContainer>
  );
};

export default Footer;
