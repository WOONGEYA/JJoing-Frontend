import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import Logo from '../../assets/logo.svg'
import Github from '../../assets/github.png'
import Google from '../../assets/google.png'
import * as S from './style';
import jwt_decode from 'jwt-decode'
 
import { useRecoilState } from 'recoil';
import { accessGoogle } from '../../apis/recoil';

const App: React.FC = () => {
  const [user, setUser] = useState<Record<string, any>>({}); 

  const handleCallbackResponse = (response: any) => {
    console.log("Encoded JWT ID token: " + response.credential);
    let userObject: any = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
  }

  const handleSignOut: React.MouseEventHandler<HTMLButtonElement> = () => {
    setUser({});
    alert('로그아웃 되었습니다.');
  }

  useEffect(() => {
    const loadGoogleAPI = () => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.onload = () => {
        // Google API 스크립트가 로드된 후에 초기화 코드 실행
        (window as any).google.accounts.id.initialize({
          client_id: "424694176954-if5tl2kngvuu0h5ogfm8kl37p2ide6v1.apps.googleusercontent.com",
          callback: handleCallbackResponse
        });

        (window as any).google.accounts.id.renderButton(
          document.getElementById("GoogleAccount"),
          { theme: "outline", width: "500px", height: "70px" }
        );

        (window as any).google.accounts.id.prompt();
      };
      document.body.appendChild(script);
    };

    loadGoogleAPI();
  }, []);

  const [profile, setProfile] = useRecoilState(accessGoogle);
  setProfile(user.picture);

  console.log(profile);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <S.Button onClick={showModal}>
        {user.name === undefined ? "Login" : user.name}
      </S.Button>
      <Modal visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <S.LoginModal>
          <S.LogoPages>
            <S.Logo src={Logo} alt="img" />
          </S.LogoPages>
          <S.GooglePage>
            <div id="GoogleAccount"></div>
            { Object.keys(user).length !== 0 &&
              <S.LogOutButtons onClick={handleSignOut}>Logout</S.LogOutButtons>
            }
          </S.GooglePage>
          <S.GooglePage>
            <S.Page>
              
            </S.Page>
          </S.GooglePage>
        </S.LoginModal>
      </Modal>
    </>
  );
};

export default App;
