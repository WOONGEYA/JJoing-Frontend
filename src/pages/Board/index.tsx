import Layout from 'components/Layout';
import * as S from './style';
import EyeIcon from 'assets/EyeIcon';
import MessageIcon from 'assets/MessageIcon';
import { useNavigate } from 'react-router-dom';
import theme from 'styles/theme';
import Input from 'components/Input';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { FindProject, getBoardList } from 'apis';
import { IReadBoard } from 'types/IReadBoard';
import { daysAgo } from 'utils/daysAgo';
import { BoardKey, ReadDetailProject } from 'contents/queryKey';
import NoResultPage from 'components/NoResult';
import { toast } from 'react-toastify';

const Board = () => {
  const [userInput, setUserInput] = useState('');
  const [projectDetail, setProjectDetail] = useState<IReadBoard[]>();
  const [searchResult, setSearchResult] = useState<IReadBoard[]>();
  const [shouldSearch, setShouldSearch] = useState(false);
  const router = useNavigate();

  const { data } = useQuery({
    queryKey: [BoardKey],
    queryFn: getBoardList,
  });

  useQuery({
    queryKey: [ReadDetailProject, userInput],
    queryFn: () => FindProject(userInput),
    enabled: shouldSearch,
    onSettled: () => setShouldSearch(false),
    onSuccess: (data) => {
      setSearchResult(data.postResponses);
    },
  });

  const writeBoard = () => {
    if (localStorage.getItem('accessToken')) {
      router('/createBoard');
    } else {
      toast.error('로그인 후 이용해주세요.');
    }
  };

  useEffect(() => {
    if (data) {
      setProjectDetail(data.postResponses);
    }
  }, [data]);

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
            onKeyPress={(e: React.KeyboardEvent) => {
              if (e.key === 'Enter') {
                setShouldSearch(true);
              }
            }}
          />
          <S.WriterButton onClick={writeBoard}>작성하기</S.WriterButton>
        </S.WriteContainer>
        {(searchResult || projectDetail)
          ?.slice()
          .reverse()
          .map((data, i) => (
            <S.BoardBoxContainer
              key={i}
              onClick={() => {
                router(`/boards/${data.id}`);
              }}
            >
              <S.ProfileInfoContainer>
                <S.Title>{data.title}</S.Title>
                <S.UserProfile>
                  <S.ProfileImg
                    src={data.userImg}
                    alt='img'
                    onClick={(e) => {
                      e.stopPropagation();
                      router(`/others/${data?.userId}`);
                    }}
                  />
                  <S.NameContainer>{data.userName}</S.NameContainer>
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
        {userInput.length > 0 && searchResult && searchResult.length === 0 && (
          <NoResultPage />
        )}
      </S.Container>
    </Layout>
  );
};

export default Board;
