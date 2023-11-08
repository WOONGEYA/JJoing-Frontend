import { ProfileUpdateModalProps } from 'type/IModalOpen';
import * as S from './style';
import CloseIcon from 'assets/CloseIcon';
import { useQuery } from 'react-query';
import { followList } from 'apis/api';
import { useEffect, useState } from 'react';
import { IFollower } from 'type/IFollower';
import FollowPeople from 'components/FollowPeople';
import Input from 'components/Input';

const FollowingrList = ({ closeModal, id }: ProfileUpdateModalProps) => {
  const [people, setPeople] = useState<IFollower[]>();
  const [userInput, setUserInput] = useState('');

  const { data } = useQuery({
    queryKey: ['userFollow', id],
    queryFn: () => followList(Number(id)),
  });
  console.log('data', data);

  useEffect(() => {
    setPeople(data);
  }, [data]);

  const filteredFollower = people?.filter((person: IFollower) =>
    person.name.toLowerCase().includes(userInput.toLowerCase()),
  );

  return (
    <S.Container>
      <S.TopWrapper>
        <S.TitleContainer>
          <S.Title>팔로우</S.Title>
          <CloseIcon cursor='pointer' onClick={() => closeModal()} />
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
            <FollowPeople key={person.id} {...person} closeModal={closeModal} />
          ))
        ) : (
          <S.Icon>검색 결과가 없습니다.</S.Icon>
        )}
      </S.ScrollContainer>
    </S.Container>
  );
};

export default FollowingrList;
