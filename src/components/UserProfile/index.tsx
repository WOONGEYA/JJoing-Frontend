import { UserInfo } from 'types/ISearchMember';
import * as S from './style';
import { useRecoilValue } from 'recoil';
import { userKey } from 'apis/recoil';
import { useMutation, useQueryClient } from 'react-query';
import { useState, useEffect } from 'react';
import { addFollow, deleteFollow } from 'apis';

const UserProfile = (data: UserInfo) => {
  const myId = useRecoilValue(userKey);
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(data.followState);

  useEffect(() => {
    setOpen(data.followState);
  }, [data.followState]);

  const deleteF = useMutation({
    mutationKey: ['userFollow'],
    mutationFn: () => deleteFollow(Number(data.id)),
    onSuccess: () => {
      queryClient.invalidateQueries(['userFollow', Number(data.id)]);
    },
  });

  const addF = useMutation({
    mutationKey: ['userFollow'],
    mutationFn: () => addFollow(Number(data.id)),
    onSuccess: () => {
      queryClient.invalidateQueries(['userFollow', Number(data.id)]);
    },
  });

  const handleFollow = (e: React.MouseEvent) => {
    e.stopPropagation();
    addF.mutate();
    setOpen(!open);
  };

  const handleFollowing = (e: React.MouseEvent) => {
    e.stopPropagation();
    deleteF.mutate();
    setOpen(!open);
  };

  return (
    <S.ContentContainer>
      <S.ImgWrapper src={data.imgUrl} alt='img' />
      <S.UserInfoContainer>
        <S.InfoWrapper>
          <div>{data.name}</div>
          <S.UserInfo>
            {data.school} / {data.major?.length ? data.major : '등록x '}
          </S.UserInfo>
        </S.InfoWrapper>
      </S.UserInfoContainer>
      {localStorage.getItem('accessToken') ? (
        myId === Number(data.id) ? (
          <S.FollowBtnMy></S.FollowBtnMy>
        ) : open ? (
          <S.FollowingBtn onClick={handleFollowing}>팔로워</S.FollowingBtn>
        ) : (
          <S.FollowBtn onClick={handleFollow}>팔로잉</S.FollowBtn>
        )
      ) : (
        <S.FollowBtnMy></S.FollowBtnMy>
      )}
    </S.ContentContainer>
  );
};

export default UserProfile;
