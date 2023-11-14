import { IFollower } from 'types/IFollower';
import * as S from './style';

const FollowPeople = ({
  closeModal,
  navigate,
  imgUrl,
  name,
  school,
  major,
}: IFollower) => {
  return (
    <S.Container onClick={navigate}>
      <S.ImgWrapper src={imgUrl} alt='img' />
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
