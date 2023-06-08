import React from 'react'
import * as S from './style' 
import Logo from '../../assets/logo.svg'
import Bell from '../../assets/bell.svg'
import { useState, useEffect } from 'react'
import LoginPage from '../../pages/LoginPage'

export default function Header() {
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 60){
        setShow(true);
      } else{
        setShow(false);
      }
    })
    
    return () => {
      window.removeEventListener('scroll', () => {});
    }
  }, [])

  return (
    <S.HeaderContainer show={show}>
      <S.HeaderWrapper>
        <S.LogoContainer>
          <S.ImageLogo src={Logo} alt="logo" />
        </S.LogoContainer>
        <S.MenuList>
          <S.MenuItem1>둘러보기</S.MenuItem1>
          <S.MenuItem>새 프로젝트</S.MenuItem>
          <S.MenuItem>채팅</S.MenuItem>
        </S.MenuList>
        <S.AlarmContainer>
          <S.Image src={Bell} alt="alarm" />
        </S.AlarmContainer>
        <S.ProfileContainer>
          <LoginPage />
        </S.ProfileContainer>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
}