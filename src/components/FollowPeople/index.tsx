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
    <S.Container>
      <S.ImgWrapper onClick={navigate} src={imgUrl} alt='img' />
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
