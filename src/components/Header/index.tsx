import React from 'react';
import LoginPage from 'pages/LoginPage';
import axios from 'axios';
import BellIcon from 'assets/BellIcon';
import LogoIcon from 'assets/LogoIcon';
import * as S from './style';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { accessGoogle } from 'apis/recoil';

const Header = () => {
  const navigate = useNavigate();
  const [isOpened, setIsOpened] = React.useState<boolean>(false);
  const [img, setImg] = useRecoilState(accessGoogle);

  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://jjoing.kro.kr/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        console.log('data:', response.data);
        setImg(response.data.imgUrl);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    navigate('/');
    localStorage.clear();
    window.location.reload();
  };

  const googleImg = img;
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
          <S.MenuItem>새 프로젝트</S.MenuItem>
        </S.MenuList>
        <S.ProfileContainer>
          {localStorage.accessToken ? (
            <>
              <Link to='/notify'>
                <BellIcon cursor='pointer' />
              </Link>
              <S.Profile
                src={googleImg}
                alt='profile'
                onClick={() => {
                  setIsOpened(!isOpened);
                }}
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
            <S.Login href='https://accounts.google.com/o/oauth2/auth?client_id=977860049416-faqog6g742c0qqs4epucuu5biobgr3ph.apps.googleusercontent.com&redirect_uri=http://localhost:3000/login/oauth2/code/google&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile'>
              로그인
            </S.Login>
          )}
          <LoginPage />
        </S.ProfileContainer>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
};

export default Header;
