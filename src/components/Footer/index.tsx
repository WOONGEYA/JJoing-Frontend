import LogoIcon from 'assets/LogoIcon';
import * as S from './style';

const Footer = () => {
  const { service, headline, tel, email, founders, location, copyright } = {
    service: '소마고 연합 사이드 프로젝트 모집 플랫폼',
    headline: [
      '이용약관',
      '개인정보처리방침',
      '공지사항',
      '문의하기',
      'FAQ | QNA',
    ],
    tel: 'Tel : 010 - 1234 - 5678',
    email: 'Email : jjoing.woong@gmail.com',
    founders: '공동대표 : 강웅빈 . 고윤영 . 이상진 . 이희성 . 한예준',
    location: '위치 : 부산광역시 강서구 가락대로 1393',
    copyright: 'Copyright Woong ltd. Alright reserved.',
  };

  return (
    <S.FooterContainer>
      <S.FooterWrapper>
        <S.InformationContainer>
          <div>
            <S.LogoContainer>
              <LogoIcon width={122} height={58} />
              <S.Service>{service}</S.Service>
            </S.LogoContainer>
            <div>
              <S.Headlines>
                {headline.map((data) => (
                  <S.Headline key={data}>{data}</S.Headline>
                ))}
              </S.Headlines>
              <S.Line />
            </div>
          </div>
          <S.Information>
            <div>
              <S.Tel>{tel}</S.Tel>
              <S.Email>{email}</S.Email>
              <S.Founders>{founders}</S.Founders>
              <S.Location>{location}</S.Location>
            </div>
            <S.Copyright>{copyright}</S.Copyright>
          </S.Information>
        </S.InformationContainer>
      </S.FooterWrapper>
    </S.FooterContainer>
  );
};

export default Footer;
