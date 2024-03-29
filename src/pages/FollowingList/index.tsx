import { ProfileUpdateModalProps } from 'types/IModalOpen';
import * as S from './style';
import CloseIcon from 'assets/CloseIcon';
import { useQuery, useQueryClient } from 'react-query';
import { followList } from 'apis';
import { useEffect, useState } from 'react';
import { IFollower } from 'types/IFollower';
import FollowPeople from 'components/FollowPeople';
import Input from 'components/Input';

const FollowingList = ({
  closeModal,
  id,
  navigate,
}: ProfileUpdateModalProps) => {
  const [people, setPeople] = useState<IFollower[]>();
  const [userInput, setUserInput] = useState('');

  const { data } = useQuery({
    queryKey: ['userFollow', id],
    queryFn: () => followList(Number(id)),
  });

  useEffect(() => {
    setPeople(data);
  }, [data]);

  const queryClient = useQueryClient();

  const filteredFollower = people?.filter((person: IFollower) =>
    person.name.toLowerCase().includes(userInput.toLowerCase()),
  );

  const handleNavigateProfile = (id: number) => {
    navigate?.(`/others/${id}`);
    closeModal();
    queryClient.invalidateQueries(['userFollow', id]);
  };

  const closeModalAndRefresh = () => {
    closeModal();
    window.location.reload();
  };

  return (
    <S.Container>
      <S.TopWrapper>
        <S.TitleContainer>
          <S.Title>팔로우</S.Title>
          <CloseIcon cursor='pointer' onClick={closeModalAndRefresh} />
        </S.TitleContainer>
        <S.TitleContainer2>
          <S.Search>
            <Input
              type='search'
              width={423}
              placeholder='검색어를 입력해주세요.'
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
          </S.Search>
        </S.TitleContainer2>
      </S.TopWrapper>
      <S.ScrollContainer>
        {filteredFollower && filteredFollower.length > 0 ? (
          filteredFollower.map((person: IFollower) => (
            <FollowPeople
              key={person.id}
              {...person}
              closeModal={closeModal}
              navigate={() => {
                handleNavigateProfile(person.id);
              }}
            />
          ))
        ) : (
          <S.Icon>검색 결과가 없습니다.</S.Icon>
        )}
      </S.ScrollContainer>
    </S.Container>
  );
};

export default FollowingList;
