import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import Logo from '../../assets/logo.svg';
import * as S from './style';
import jwt_decode from 'jwt-decode';
import { useRecoilState } from 'recoil';
import { accessGoogle } from '../../apis/recoil';
import { GoogleCallbackResponse } from '../../../global';
import { isNullObject } from 'utils/object';

interface User {
  name: string;
  picture: string;
}

const App: React.FC = () => {
  const defaultUserState = { name: '', picture: '' };
  const [user, setUser] = useState<User>(defaultUserState);
  const [profile, setProfile] = useRecoilState(accessGoogle);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCallbackResponse = (response: GoogleCallbackResponse) => {
    console.log('Encoded JWT ID token: ' + response.credential);
    const userObject = jwt_decode(response.credential) as User;
    console.log(userObject);
    setUser(userObject);
  };

  const handleSignOut: React.MouseEventHandler<HTMLButtonElement> = () => {
    setUser(defaultUserState);
    alert('로그아웃 되었습니다.');
  };

  useEffect(() => {
    const loadGoogleAPI = () => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.onload = () => {
        // Google API 스크립트가 로드된 후에 초기화 코드 실행
        window.google.accounts.id.initialize({
          client_id: '424694176954-if5tl2kngvuu0h5ogfm8kl37p2ide6v1.apps.googleusercontent.com',
          callback: handleCallbackResponse,
        });

        window.google.accounts.id.renderButton(document.getElementById('GoogleAccount'), {
          theme: 'outline',
          width: '500px',
          height: '70px',
        });

        window.google.accounts.id.prompt();
      };
      document.body.appendChild(script);
    };

    loadGoogleAPI();
  }, []);

  useEffect(() => {
    setProfile(user.picture || '');
    console.log(profile);
  }, []);

  return (
    <>
      <S.Button onClick={() => setIsModalOpen(true)}>{user.name === undefined ? 'Login' : user.name}</S.Button>
      <Modal open={isModalOpen} onOk={() => setIsModalOpen(false)} onCancel={() => setIsModalOpen(false)}>
        <S.LoginModal>
          <S.LogoPages>
            <S.Logo src={Logo} alt='img' />
          </S.LogoPages>
          <S.GooglePage>
            <div id='GoogleAccount'></div>
            {isNullObject(user) && <S.LogOutButtons onClick={handleSignOut}>Logout</S.LogOutButtons>}
          </S.GooglePage>
          <S.GooglePage>
            <S.Page></S.Page>
          </S.GooglePage>
        </S.LoginModal>
      </Modal>
    </>
  );
};

export default App;
