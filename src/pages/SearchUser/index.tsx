import Layout from 'components/Layout';
import * as S from './style';
import Input from 'components/Input';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { searchUser } from 'apis';
import { UserInfo } from 'types/ISearchMember';
import { useNavigate } from 'react-router-dom';
import NoResultPage from 'components/NoResult';
import UserProfile from 'components/UserProfile';

const SearchUser = () => {
  const [userInput, setUserInput] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const [userInfo, setUserInfo] = useState<UserInfo[]>();

  const searchQuery = useQuery({
    queryKey: ['searchUser', searchKey],
    queryFn: () => searchUser(searchKey),
    enabled: searchKey.length >= 0,
  });

  const { data, error } = searchQuery;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    setSearchKey(userInput);
  };

  useEffect(() => {
    if (data) {
      setUserInfo(data);
    }

    if (error) {
      console.error(error);
    }
  }, [data, error]);

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
        {userInfo?.length === 0 && searchKey.length > 1 ? (
          <NoResultPage />
        ) : (
          userInfo?.map((data) => (
            <div
              key={data.id}
              onClick={() => {
                navigate(`/others/${data.id}`);
              }}
            >
              <UserProfile {...data} />
            </div>
          ))
        )}
      </S.Container>
    </Layout>
  );
};

export default SearchUser;
