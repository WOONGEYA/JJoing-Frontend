import MessageIcon from 'assets/MessageIcon';
import * as S from './style';
import theme from 'styles/theme';
import { useEffect, useState } from 'react';
import SubmitArrow from 'assets/SubmitArrow';
import MessageInput from 'components/MessageInput';
import { ICommentProps } from 'types/IComponentsProps';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { ReComent } from 'contents/queryKey';
import { getReComment, postReComment } from 'apis/api';
import { IRecomment } from 'types/IRecomment';
import Recomment from 'components/ReComment';
import { toast } from 'react-toastify';

const Comment = ({ data }: { data: ICommentProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [arr, setArr] = useState<IRecomment[]>([]);

  const queryClient = useQueryClient();

  const commentMutate = useMutation({
    mutationKey: [ReComent],
    mutationFn: () => postReComment(Number(data.id), userInput),
    onSuccess: (data) => {
      setArr((prevArr) => [...prevArr, data]);
      queryClient.invalidateQueries([ReComent]);
    },
  });

  const getComments = useQuery({
    queryKey: [ReComent, data.id],
    queryFn: () => getReComment(Number(data.id)),
    onSuccess: (data: IRecomment[]) => {
      if (data) {
        getComments;
        setArr(data);
      }
    },
  });

  const sendData = () => {
    if (localStorage.getItem('accessToken')) {
      commentMutate.mutate();
      setUserInput('');
    } else {
      toast.error('로그인 후 이용해 주세요');
    }
  };

  useEffect(() => {
    getComments;
  }, []);

  return (
    <S.CommentContainer>
      <S.ProfileContainer>
        <S.Circle src={data.userImg} alt='img' />
      </S.ProfileContainer>
      <S.ProfileChatContainer>
        <S.ProfileChatTitle>
          <S.UserProfile>
            <S.UserView>{data.userName}</S.UserView>
            <S.DateView>{data.createTime?.replace('T', ' ')}</S.DateView>
          </S.UserProfile>
          <S.CountView>
            <MessageIcon color={theme.grey[500]} />
            {data.reCommentCount}
          </S.CountView>
        </S.ProfileChatTitle>
        <S.CommentWrapper
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <p>{data.content}</p>
        </S.CommentWrapper>
        {arr.map((data, index) => (
          <Recomment data={data} key={index} />
        ))}

        {isOpen && (
          <S.MessageContainer>
            <MessageInput
              width={'95%'}
              placeholder='타인의 권리를 침해하거나 명예를 훼손하는 댓글은 제재를 받을 수 있습니다.'
              type='search'
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e: React.KeyboardEvent) => {
                if (e.key === 'Enter') {
                  sendData();
                }
              }}
            />
            <S.ButtonContainer>
              <div style={{ marginLeft: '7px' }}>
                <SubmitArrow onClick={sendData} />
              </div>
            </S.ButtonContainer>
          </S.MessageContainer>
        )}
      </S.ProfileChatContainer>
    </S.CommentContainer>
  );
};

export default Comment;
