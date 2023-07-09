import * as S from './style';
import Logo from '../../assets/logo.svg';
import { useState, useEffect } from 'react';
import LoginPage from '../../pages/LoginPage';
import { useRecoilState } from 'recoil';
import { accessGoogle } from '../../apis/recoil';

export default function Header() {
  const authUrl = 'https://accounts.google.com/o/oauth2/auth?client_id=977860049416-faqog6g742c0qqs4epucuu5biobgr3ph.apps.googleusercontent.com&redirect_uri=http://localhost:3000/login/oauth2/code/google&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile';

  const [show, setShow] = useState<boolean>(false);
  const [profile, setProfile] = useRecoilState(accessGoogle);
  
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
    <S.HeaderContainer show={show}>
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
            <S.Href href={authUrl}>로그인</S.Href>
          }
        </S.AlarmContainer>
        <S.ProfileContainer>
          <LoginPage />
        </S.ProfileContainer>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
}
