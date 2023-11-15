import { IFollower } from 'types/IFollower';
import * as S from './style';

const FollowPeople = ({
  navigate,
  imgUrl,
  name,
  school,
  major,
  followState,
  navigates,
}: IFollower) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigates?.('/123123123');
  };

  return (
    <S.Container onClick={navigate}>
      <S.ImgWrapper src={imgUrl} alt='img' />
      <S.UserInfoContainer>
        <div>
          <div>{name}</div>
          <S.UserInfo>
            {school} / {major?.length ? major : '등록x '}
          </S.UserInfo>
        </div>
      </S.UserInfoContainer>
      <S.FollowBtn onClick={handleClick}>팔로우</S.FollowBtn>
    </S.Container>
  );
};

export default FollowPeople;
