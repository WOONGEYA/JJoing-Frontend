import instance from 'apis/httpClient';
import * as S from './style';
import CloseIcon from 'assets/CloseIcon';
import theme from 'styles/theme';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import Input from 'components/Input';

interface NotifyAlertProps {
  applicationId: number;
  fromUserId: number;
  closeModal: () => void;
}

interface UserInfo {
  id: number;
  introduce: string;
  userId: number;
  userName: string;
  userImg: string;
  school: string;
  phone: string;
  position: string;
}

const NotifyAlert = ({
  applicationId,
  closeModal,
  fromUserId,
}: NotifyAlertProps) => {
  const [member, setMember] = useState<UserInfo>();
  const [isMember, setIsMember] = useState(null);

  const DeleteJJoing = () => {
    instance
      .put(`/application/${applicationId}/reject`, {
        headers: {
          Authorization: `Barer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then(() => {
        toast.error('쪼잉을 거절했습니다.');
        closeModal();
      });
  };

  const JJoingNow = () => {
    instance
      .put(`/application/${applicationId}/accept`, {
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
    instance.get(`/project/member/check/${applicationId}`).then((res) => {
      setIsMember(res.data);
    });
  }, []);

  useEffect(() => {
    instance.get(`/application/${applicationId}`).then((res) => {
      setMember(res.data);
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
        <S.Description value={member?.introduce} readOnly />
      </S.Content>
      <S.Content>
        <S.ContentTitle>전화번호</S.ContentTitle>
        <Input width={'95%'} value={member?.phone} readOnly />
      </S.Content>
      <S.Content>
        <S.GoProfileText>프로필 정보</S.GoProfileText>
        <S.Container>
          <S.ProfileImg src={member?.userImg} alt='' />
          <S.UserInfoContainer>
            <div>{member?.userName}</div>
            <S.UserInfo>
              {member?.school} / {member?.position}
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
