import Layout from 'components/Layout';
import * as S from './style';
import notifications from 'fixtures/notify.dummy';
import EyeIcon from 'assets/EyeIcon';
import MessageIcon from 'assets/MessageIcon';
import { useNavigate } from 'react-router-dom';
import theme from 'styles/theme';
import Input from 'components/Input';
import { useState } from 'react';

const Board = () => {
  const [userInput, setUserInput] = useState('');
  const router = useNavigate();

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
            onChange={(e) => setUserInput(e.target.value)}
          />
          <S.WriterButton
            onClick={() => {
              router('/createBoard');
            }}
          >
            작성하기
          </S.WriterButton>
        </S.WriteContainer>
        {notifications.map((data, i) => (
          <S.BoardBoxContainer
            key={i}
            onClick={() => {
              router(`/boards/${i}`);
            }}
          >
            <S.ProfileInfoContainer>
              <div>{data.project}</div>
              <div>{data.user}</div>
            </S.ProfileInfoContainer>
            <S.ProjectDetail>
              <S.DetailDay>{data.timestamp}</S.DetailDay>
            </S.ProjectDetail>
            <S.Detail>
              <S.DetailBox>
                <EyeIcon color={theme.grey[600]} />
                10234
              </S.DetailBox>
              <S.DetailBox>
                <MessageIcon color={theme.grey[600]} />
                fds
              </S.DetailBox>
              <S.DetailDay>2023일 전</S.DetailDay>
            </S.Detail>
          </S.BoardBoxContainer>
        ))}
      </S.Container>
    </Layout>
  );
};

export default Board;
