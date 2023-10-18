import CloseIcon from 'assets/CloseIcon';
import * as S from './style';
import LogoIcon from 'assets/LogoIcon';
import GoogleIcon from 'assets/GoogleIcon';
import { OAUTH_URL } from 'constants/config';

interface LoginModalProps {
  closeModal: () => void;
}

const LoginModal = ({ closeModal }: LoginModalProps) => {
  return (
    <S.Layout>
      <S.Content>
        <S.Top>
          <CloseIcon onClick={closeModal} cursor='pointer' />
        </S.Top>
        <S.Main>
          <S.LogoContainer>
            <LogoIcon width={219} height={65} />
          </S.LogoContainer>
          <S.Login href={OAUTH_URL}>
            <S.LoginGoggle>
              <GoogleIcon />
              구글 계정으로 로그인
            </S.LoginGoggle>
          </S.Login>
        </S.Main>
      </S.Content>
    </S.Layout>
  );
};

export default LoginModal;
