import React, { useEffect } from 'react';
import BellIcon from 'assets/BellIcon';
import LogoIcon from 'assets/LogoIcon';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { accessGoogle, userKey } from 'apis/recoil';
import { OAUTH_URL } from 'constants/config';
import instance from 'apis/httpClient';
import * as S from './style';
import useModal from 'hooks/useModal';
import GenerateModal from 'components/GenerateModal';

const Header = () => {
  const navigate = useNavigate();
  const [isOpened, setIsOpened] = React.useState<boolean>(false);
  const [img, setImg] = useRecoilState(accessGoogle);
  const { openModal, closeModal } = useModal();
  const [user, setUser] = useRecoilState(userKey);

  const modalOpen = () => {
    openModal({
      component: <GenerateModal closeModal={closeModal} />,
    });
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const accessToken = localStorage.getItem('accessToken');

      if (accessToken) {
        try {
          const response = await instance.get('/user', {
            headers: {
              Authorization: accessToken,
            },
          });

          setUser(response.data.id);
          setImg(response.data.imgUrl);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    navigate('/');
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
                src={img}
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
            <S.Login href={OAUTH_URL}>로그인</S.Login>
          )}
        </S.ProfileContainer>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
};

export default Header;
