import { IFollower } from 'types/IFollower';
import * as S from './style';
import { useRecoilValue } from 'recoil';
import { userKey } from 'apis/recoil';
import { useMutation, useQueryClient } from 'react-query';
import { addFollow, deleteFollow } from 'apis';
import { useState } from 'react';

const FollowPeople = ({
  id,
  navigate,
  imgUrl,
  name,
  school,
  major,
  followState,
}: IFollower) => {
  const myId = useRecoilValue(userKey);
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(followState);

  const deleteF = useMutation({
    mutationKey: ['userFollow'],
    mutationFn: () => deleteFollow(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['userFollow', id]);
    },
  });

  const addF = useMutation({
    mutationKey: ['userFollow'],
    mutationFn: () => addFollow(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['userFollow', id]);
    },
  });

  const handleFollow = (e: React.MouseEvent) => {
    e.stopPropagation();
    addF.mutate();
    setOpen(true);
  };

  const handleFollowing = (e: React.MouseEvent) => {
    e.stopPropagation();
    deleteF.mutate();
    setOpen(false);
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
      {localStorage.getItem('accessToken') ? (
        myId === Number(id) ? (
          <></>
        ) : open ? (
          <S.FollowingBtn onClick={handleFollowing}>팔로잉</S.FollowingBtn>
        ) : (
          <S.FollowBtn onClick={handleFollow}>팔로우</S.FollowBtn>
        )
      ) : null}
    </S.Container>
  );
};

export default FollowPeople;
