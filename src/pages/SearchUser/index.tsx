import Layout from 'components/Layout';
import * as S from './style';
import Input from 'components/Input';
import { useState, useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addFollow, deleteFollow, searchUser } from 'apis/api';
import { UserInfo } from 'types/ISearchMember';
import { useRecoilValue } from 'recoil';
import { userKey } from 'apis/recoil';
import { useNavigate } from 'react-router-dom';

const SearchUser = () => {
  const [userInput, setUserInput] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const [userInfo, setUserInfo] = useState<UserInfo[]>();
  const myId = useRecoilValue(userKey);
  const [open, setOpen] = useState(false); //followState
  const [selectedId, setSelectedId] = useState<number>(0);

  const { data, error } = useQuery({
    queryKey: ['searchUser', searchKey],
    queryFn: () => searchUser(searchKey),
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    if (!userInput) {
      return;
    }

    setSearchKey(userInput);
  };

  useEffect(() => {
    if (data) {
      setUserInfo(data);
    }

    if (error) {
      console.error(error);
    }
  }, [data, error, userInfo]);

  const queryClient = useQueryClient();

  const deleteF = useMutation({
    mutationKey: ['userFollow'],
    mutationFn: () => deleteFollow(selectedId),
    onSuccess: () => {
      queryClient.invalidateQueries(['userFollow', selectedId]);
    },
  });

  const addF = useMutation({
    mutationKey: ['userFollow'],
    mutationFn: () => addFollow(selectedId),
    onSuccess: () => {
      queryClient.invalidateQueries(['userFollow', selectedId]);
    },
  });

  const handleFollow = (id: number) => {
    setSelectedId(id);
    addF.mutate();
  };

  const handleFollowing = (id: number) => {
    setSelectedId(id);
    deleteF.mutate();
  };

  const navigate = useNavigate();

  return (
    <Layout>
      <S.Container>
        <S.WriteContainer>
          <Input
            type='search'
            width={'100%'}
            height={20}
            placeholder='검색어를 입력해주세요.'
            value={userInput}
            onChange={handleInputChange}
            onKeyPress={(e: React.KeyboardEvent) => {
              if (e.key === 'Enter') {
                handleSubmit();
              }
            }}
          />
        </S.WriteContainer>
        {userInfo?.map((data) => (
          <S.ContentContainer
            key={data.id}
            onClick={() => {
              navigate(`/others/${data.id}`);
            }}
          >
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
                <S.FollowingBtn onClick={() => handleFollowing(data.id)}>
                  팔로잉
                </S.FollowingBtn>
              ) : (
                <S.FollowBtn onClick={() => handleFollow(data.id)}>
                  팔로우
                </S.FollowBtn>
              )
            ) : null}
          </S.ContentContainer>
        ))}
      </S.Container>
    </Layout>
  );
};

export default SearchUser;
