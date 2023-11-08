import { ProfileUpdateModalProps } from 'type/IModalOpen';
import * as S from './style';
import CloseIcon from 'assets/CloseIcon';
import { useQuery } from 'react-query';
import { followingList } from 'apis/api';
import FollowPeople from 'components/FollowPeople';
import { useEffect, useState } from 'react';
import { IFollower } from 'type/IFollower';
import notifications from 'fixtures/notify.dummy';
import Input from 'components/Input';

const FollowerList = ({ closeModal, id }: ProfileUpdateModalProps) => {
  const [people, setPeople] = useState<IFollower[]>();
  const { data } = useQuery({
    queryKey: ['userFollow', id],
    queryFn: () => followingList(Number(id)),
  });

  useEffect(() => {
    setPeople(data);
  }, [data]);

  return (
    <S.Container>
      <S.TopWrapper>
        <S.TitleContainer>
          <S.Title>팔로워</S.Title>
          <CloseIcon cursor='pointer' onClick={() => closeModal()} />
        </S.TitleContainer>
        <S.TitleContainer2>
          <S.Search>
            <Input
              type='search'
              width={423}
              placeholder='검색어를 입력해주세요.'
              // value={userInput}
              // onChange={(e) => setUserInput(e.target.value)}
            />
          </S.Search>
        </S.TitleContainer2>
      </S.TopWrapper>
      <S.ScrollContainer>
        {people?.map((data: IFollower) => (
          <FollowPeople key={data.id} {...data} />
        ))}
      </S.ScrollContainer>
    </S.Container>
  );
};

export default FollowerList;
