import * as S from './style';
import Logo from 'assets/Logo';

const Footer = () => {
  const { service, headline, tel, mail, serviceInfo, locate, copyright } = {
    service: '소마고 연합 사이드 프로젝트 모집 플랫폼',
    headline: ['이용약관', '개인정보처리방침', '공지사항', '문의하기', 'FAQ | QNA'],
    tel: '010 - 1234 - 5678',
    mail: 'jjoing.woong@gmail.com',
    serviceInfo: '강웅빈 . 고윤영 . 이상진 . 이희성 . 한예준',
    locate: '부산광역시 강서구 가락대로 1393',
    copyright: 'Copyright Woong ltd. Alright reserved.',
  };

  return (
    <S.Container>
      <Logo width={122} height={73} />
      <S.List>
        <S.Title>{service}</S.Title>
        <S.HeadLine>
          {headline.map((item, index) => (
            <S.HeadLineElement key={index}>{item}</S.HeadLineElement>
          ))}
        </S.HeadLine>
      </S.List>
      <S.Info>
        <h2>Tel:</h2>
        <span>{tel}</span>
      </S.Info>
      <S.Info>
        <h2>E-mail:</h2>
        <span>{mail}</span>
      </S.Info>
      <S.Info>
        <h2>공동대표:</h2>
        <span>{serviceInfo}</span>
      </S.Info>
      <S.Flex>
        <S.Info>
          <h2>위치:</h2>
          <span>{locate}</span>
        </S.Info>
        <S.CopyRight>{copyright}</S.CopyRight>
      </S.Flex>
    </S.Container>
  );
};

export default Footer;
