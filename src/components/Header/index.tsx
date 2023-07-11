import * as S from './style';
import Logo from 'assets/logo.svg';
import { useState, useEffect } from 'react';
import LoginPage from 'pages/LoginPage';
import { OAUTH_URL } from 'constants/config';

export default function Header() {
  const [show, setShow] = useState<boolean>(false);
  console.log(`URL : ${OAUTH_URL}`);
  console.log(window.location.port);
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <S.HeaderContainer show={show ? 1 : null}>
      <S.HeaderWrapper>
        <S.LogoContainer>
          <S.ImageLogo src={Logo} alt='logo' />
        </S.LogoContainer>
        <S.MenuList>
          <S.MenuItem1>둘러보기</S.MenuItem1>
          <S.MenuItem>새 프로젝트</S.MenuItem>
          <S.MenuItem>채팅</S.MenuItem>
        </S.MenuList>
        <S.AlarmContainer>
          {localStorage.accessToken ?
            <S.Href onClick={handleLogout}>로그아웃</S.Href> : 
            <S.Href href={OAUTH_URL}>로그인</S.Href>
          }
        </S.AlarmContainer>
        <S.ProfileContainer>
          <LoginPage />
        </S.ProfileContainer>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
}
