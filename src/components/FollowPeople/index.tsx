import { IFollower } from 'types/IFollower';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { gotoUserProfile, gotoUserProfileId } from 'apis/recoil';

const FollowPeople = ({
  closeModal,
  id,
  imgUrl,
  name,
  school,
  major,
}: IFollower) => {
  const [gotoUser, setGotoUser] = useRecoilState(gotoUserProfile);
  const [gotoUserId, setGotoUserId] = useRecoilState(gotoUserProfileId);

  const goToProfile = () => {
    setGotoUser(true);
    setGotoUserId(id);
    closeModal();
  };

  return (
    <S.Container>
      <S.ImgWrapper src={imgUrl} alt='img' onClick={goToProfile} />
      <S.UserInfoContainer>
        <div>{name}</div>
        <S.UserInfo>
          {school} / {major}
        </S.UserInfo>
      </S.UserInfoContainer>
    </S.Container>
  );
};

export default FollowPeople;
