import Layout from 'components/Layout';
import * as S from './style';
import Input from 'components/Input';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { searchUser } from 'apis/api';

const SearchUser = () => {
  const [userInput, setUserInput] = useState('');
  const [searchKey, setSearchKey] = useState('');

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
      console.log(data);
    }

    if (error) {
      console.error(error);
    }
  }, [data, error]);

  return (
    <Layout>
      <S.Container>
        <S.WriteContainer>
          <Input
            type='search'
            width={'45%'}
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
      </S.Container>
    </Layout>
  );
};

export default SearchUser;
