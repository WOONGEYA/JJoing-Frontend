import Layout from 'components/Layout';
import * as S from './style';
import EyeIcon from 'assets/EyeIcon';
import MessageIcon from 'assets/MessageIcon';
import { useNavigate } from 'react-router-dom';
import theme from 'styles/theme';
import Input from 'components/Input';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getBoardList } from 'apis/api';
import { IReadBoard } from 'types/IReadBoard';
import { daysAgo } from 'utils/daysAgo';
import { BoardKey } from 'contents/queryKey';

const Board = () => {
  const [userInput, setUserInput] = useState('');
  const [projectDetail, setProjectDetail] = useState<IReadBoard[]>();

  const router = useNavigate();

  const { data } = useQuery({
    queryKey: [BoardKey],
    queryFn: getBoardList,
  });

  useEffect(() => {
    if (data) {
      setProjectDetail(data.postResponses);
    }
  }, [data]);

  console.log(userInput);
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
        {projectDetail?.map((data, i) => (
          <S.BoardBoxContainer key={i}>
            <S.ProfileInfoContainer>
              <S.Title
                onClick={() => {
                  router(`/boards/${data.id}`);
                }}
              >
                {data.title}
              </S.Title>
              <S.UserProfile>
                <S.ProfileImg
                  src={data.userImg}
                  alt='img'
                  onClick={() => {
                    router(`/others/${data.userId}`);
                  }}
                />
                {data.userName}
              </S.UserProfile>
            </S.ProfileInfoContainer>
            <S.ProjectDetail>
              <S.DetailDay>{data.content}</S.DetailDay>
            </S.ProjectDetail>
            <S.Detail>
              <S.DetailBox>
                <EyeIcon color={theme.grey[600]} />
                {Number(data.viewCount) < 1 ? 0 : data.viewCount}
              </S.DetailBox>
              <S.DetailBox>
                <MessageIcon color={theme.grey[600]} />
                {data?.commentCount == null ? 0 : data?.commentCount}
              </S.DetailBox>
              <S.detailContents>
                {daysAgo(data.createTime) < 1
                  ? '오늘'
                  : daysAgo(data.createTime) + '일 전'}
              </S.detailContents>
            </S.Detail>
          </S.BoardBoxContainer>
        ))}
      </S.Container>
    </Layout>
  );
};

export default Board;
