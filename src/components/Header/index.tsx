import React from 'react';
import LoginPage from 'pages/LoginPage';
import axios from 'axios';
import Profile from 'assets/profile.webp';
import BellIcon from 'assets/BellIcon';
import LogoIcon from 'assets/LogoIcon';
import { OAUTH_URL } from 'constants/config';
import * as S from './style';
import { Link } from 'react-router-dom';
import useModal from 'hooks/useModal';
import GenerateModal from 'components/GenerateModal';

const Header = () => {
  const [isOpened, setIsOpened] = React.useState<boolean>(false);
  const { openModal, closeModal } = useModal();

  const modalOpen = () => {
    openModal({
      component: <GenerateModal closeModal={closeModal} />,
    });
  };

  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://192.168.10.142:8080/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        console.log('data:', response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <S.MenuList>
          <Link to='/'>
            <LogoIcon height={24} />
          </Link>
          <Link to='/explore'>
            <S.MenuItem>프로젝트 목록</S.MenuItem>
          </Link>
          <S.MenuItem onClick={modalOpen}>새 프로젝트</S.MenuItem>
        </S.MenuList>
        <S.ProfileContainer>
          {localStorage.accessToken ? (
            <>
              <Link to='/notify'>
                <BellIcon cursor='pointer' />
              </Link>
              <S.Profile
                src={Profile}
                alt='profile'
                onClick={() => setIsOpened(!isOpened)}
              />
              {isOpened && (
                <S.DropdownContainer>
                  <S.Options>
                    <Link to='/mypage'>
                      <S.Option>내 프로필</S.Option>
                    </Link>
                    <Link to='/like'>
                      <S.Option>마이쫑</S.Option>
                    </Link>
                    <S.Option onClick={handleLogout}>로그아웃</S.Option>
                  </S.Options>
                </S.DropdownContainer>
              )}
            </>
          ) : (
            <S.Login href={OAUTH_URL}>로그인</S.Login>
          )}
          <LoginPage />
        </S.ProfileContainer>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
};

export default Header;
