import ShowJJoingPerson from 'components/ShowJJoingPerson';
import useModal from 'hooks/useModal';
import { User } from 'pages/ProjectJoinList';
import * as S from './style';

const JJoingUser = (data: User) => {
  const { openModal, closeModal } = useModal();

  const OpenJjoingList = () => {
    openModal({
      component: <ShowJJoingPerson closeModal={closeModal} userData={[data]} />,
    });
  };

  return (
    <S.Container onClick={OpenJjoingList}>
      <S.ProfileImg src={data.userImg} alt='' />
      <S.UserInfoContainer>
        <div>{data.userName}</div>
        <S.UserInfo>
          {data.school} / {data.position}
        </S.UserInfo>
      </S.UserInfoContainer>
    </S.Container>
  );
};

export default JJoingUser;
