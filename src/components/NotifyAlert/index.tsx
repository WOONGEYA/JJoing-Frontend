import instance from 'apis/httpClient';
import * as S from './style';
import CloseIcon from 'assets/CloseIcon';
import Input from 'components/Input';
import theme from 'styles/theme';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

interface GenerateModalProps {
  closeModal: () => void;
  userId: number;
}

const NotifyAlert = ({ closeModal, userId }: GenerateModalProps) => {
  const [isMember, setIsMember] = useState(null);

  const DeleteJJoing = () => {
    instance
      .put(`/application/${userId}/reject`, {
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
      .put(`/application/${userId}/accept`, {
        headers: {
          Authorization: `Barer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then(() => {
        toast.success('쪼잉이 완료되었습니다.');
        window.location.reload();
        closeModal();
      });
  };

  useEffect(() => {
    instance.get(`/project/member/check/${userId}`, {}).then((res) => {
      setIsMember(res.data);
    });
  }, []);

  return (
    <S.ModalContainer>
      <S.TitleContainer>
        <S.Title>쪼잉 요청</S.Title>
        <CloseIcon cursor='pointer' onClick={() => closeModal()} />
      </S.TitleContainer>
      <S.Content>
        <S.ContentTitle>한줄 소개</S.ContentTitle>
        <S.Description value={userId} readOnly />
      </S.Content>
      <S.Content>
        <S.ContentTitle>전화번호</S.ContentTitle>
        {/* <Input width={'95%'} value={userData[0].phone} readOnly /> */}
      </S.Content>
      <S.Content>
        <S.GoProfileText>프로필 정보</S.GoProfileText>
        <S.Container>
          {/* <S.ProfileImg src={userData[0].userImg} alt='' /> */}
          <S.UserInfoContainer>
            {/* <div>{userData[0].userName}</div> */}
            <S.UserInfo>
              {/* {userData[0].school} / {userData[0].position} */}
            </S.UserInfo>
          </S.UserInfoContainer>
        </S.Container>
      </S.Content>
      <S.ButtonWrapper>
        {isMember === false && (
          <S.ButtonWrapper>
            <S.Button color={theme.grey[600]} onClick={DeleteJJoing}>
              거절하기
            </S.Button>
            <S.Button color={theme.primary} onClick={JJoingNow}>
              쪼잉하기
            </S.Button>
          </S.ButtonWrapper>
        )}
      </S.ButtonWrapper>
    </S.ModalContainer>
  );
};

export default NotifyAlert;
