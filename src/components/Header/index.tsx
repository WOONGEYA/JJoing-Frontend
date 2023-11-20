import React, { useEffect } from 'react';
import BellIcon from 'assets/BellIcon';
import LogoIcon from 'assets/LogoIcon';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { accessGoogle, userKey } from 'apis/recoil';
import { FORM_URL, OAUTH_URL } from 'constants/config';
import instance from 'apis/httpClient';
import * as S from './style';
import useModal from 'hooks/useModal';
import GenerateModal from 'components/GenerateModal';
import { toast } from 'react-toastify';

const Header = () => {
  const navigate = useNavigate();
  const [isOpened, setIsOpened] = React.useState<boolean>(false);
  const [img, setImg] = useRecoilState(accessGoogle);
  const { openModal, closeModal } = useModal();
  const [notificationCount, setNotificationCount] = React.useState(0);
  const setUserId = useSetRecoilState(userKey);

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
          const { data } = await instance.get('/user', {
            headers: {
              Authorization: accessToken,
            },
          });

          setUserId(data.id);
          setImg(data.imgUrl);
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

  const loginAlert = () => {
    toast.error('로그인 후에 이용해 주세요');
  };

  useEffect(() => {
    const getNotificationCount = async () => {
      const accessToken = localStorage.getItem('accessToken');

      if (accessToken) {
        const { data } = await instance.get('/notification/count', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });

        setNotificationCount(data);
      }
    };

    getNotificationCount();
  }, [notificationCount]);

  const router = useNavigate();

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
          <S.MenuItem
            onClick={localStorage.accessToken ? modalOpen : loginAlert}
          >
            새 프로젝트 생성
          </S.MenuItem>
          <S.MenuItem
            onClick={() => {
              router('/board');
            }}
          >
            게시판
          </S.MenuItem>
          <S.MenuItem
            onClick={() => {
              router('/search-user');
            }}
          >
            유저 검색
          </S.MenuItem>
        </S.MenuList>
        <S.ProfileContainer>
          {localStorage.accessToken ? (
            <>
              <Link to='/notify'>
                <S.BellContainer>
                  <BellIcon cursor='pointer' />
                  <S.BellCount>
                    {notificationCount > 0 ? notificationCount : ''}
                  </S.BellCount>
                </S.BellContainer>
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
                    <Link to='/myjjong'>
                      <S.Option>마이쫑</S.Option>
                    </Link>
                    <S.Inquire href='https://forms.gle/6VFhVxgRpB6M12nr7'>
                      <S.Option>쪼잉에 문의하기</S.Option>
                    </S.Inquire>
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
