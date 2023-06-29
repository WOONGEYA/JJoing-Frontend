import * as S from './style';
import Logo from '../../assets/logo.svg';
import { useState, useEffect } from 'react';
import LoginPage from '../../pages/LoginPage';
import { useRecoilState } from 'recoil';
import { accessGoogle } from '../../apis/recoil';

export default function Header() {
  const [show, setShow] = useState<boolean>(false);
  const [profile, setProfile] = useRecoilState(accessGoogle);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 60);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

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
        <S.AlarmContainer>{profile && <S.Image src={profile} />}</S.AlarmContainer>
        <S.ProfileContainer>
          <LoginPage />
        </S.ProfileContainer>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
}
