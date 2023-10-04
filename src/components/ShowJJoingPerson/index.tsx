import instance from 'apis/httpClient';
import * as S from './style';
import CloseIcon from 'assets/CloseIcon';
import Input from 'components/Input';
import theme from 'styles/theme';
import { toast } from 'react-toastify';

interface User {
  id: number;
  introduce: string;
  userName: string;
  position: string;
}

interface GenerateModalProps {
  closeModal: () => void;
  userData: User[];
}

const ShowJJoingPerson = ({ closeModal, userData }: GenerateModalProps) => {
  const DeleteJJoing = () => {
    instance
      .put(`/application/${userData[0].id}/reject`, {
        headers: {
          Authorization: `Barer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then(() => {
        toast.error('쪼잉을 거절했습니다.');
        closeModal();
        window.location.reload();
      });
  };

  const JJoingNow = () => {
    instance
      .put(`/application/${userData[0].id}/accept`, {
        headers: {
          Authorization: `Barer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then(() => {
        toast.success('쪼잉이 완료되었습니다.');
        closeModal();
        window.location.reload();
      });
  };

  return (
    <S.ModalContainer>
      <S.TitleContainer>
        <S.Title>쪼잉 요청</S.Title>
        <CloseIcon cursor='pointer' onClick={() => closeModal()} />
      </S.TitleContainer>
      <S.Content>
        <S.ContentTitle>이름: {userData[0].userName}</S.ContentTitle>
      </S.Content>
      <S.Content>
        <S.ContentTitle>한줄 소개</S.ContentTitle>
        <Input width={'95%'} value={userData[0].introduce} readOnly />
      </S.Content>
      <S.Content>
        <S.ContentTitle>분야</S.ContentTitle>
        <Input width={'95%'} value={userData[0].position} readOnly />
      </S.Content>
      <S.Content>
        <S.ContentTitle>전화 번호</S.ContentTitle>
        <Input width={'95%'} value={userData[0].introduce} readOnly />
      </S.Content>
      <S.ButtonWrapper>
        <S.Button color={theme.grey[600]} onClick={DeleteJJoing}>
          거절하기
        </S.Button>
        <S.Button color={theme.primary} onClick={JJoingNow}>
          쪼잉하기
        </S.Button>
      </S.ButtonWrapper>
    </S.ModalContainer>
  );
};

export default ShowJJoingPerson;
