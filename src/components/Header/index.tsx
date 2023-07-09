import React, { useState, useEffect } from 'react';
import * as S from './style';
import Logo from 'assets/logo.svg';
import Bell from 'assets/bell.svg';
import Profile from 'assets/profile.svg';

export default function Header() {
	const [show, setShow] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 60) {
				setShow(true);
			} else {
				setShow(false);
			}
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
				<S.AlarmContainer>
					<S.Image src={Bell} alt='alarm' />
				</S.AlarmContainer>
				<S.ProfileContainer>
					<S.Image src={Profile} alt='profile' />
				</S.ProfileContainer>
			</S.HeaderWrapper>
		</S.HeaderContainer>
	);
}
