import MessageInput from 'components/MessageInput';
import * as S from './style';
import { useState } from 'react';
import Comment from 'components/Comment';
import SubmitArrow from 'assets/SubmitArrow';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getComment, postComment } from 'apis';
import { Comments } from 'contents/queryKey';
import { ICommentProps } from 'types/IComponentsProps';
import { toast } from 'react-toastify';

const MessageBox = () => {
  const [userInput, setUserInput] = useState('');
  const [arr, setArr] = useState<ICommentProps[]>([]);
  const { id } = useParams();

  const queryClient = useQueryClient();

  const commentMutate = useMutation({
    mutationKey: [Comments],
    mutationFn: () => postComment(Number(id), userInput),
    onSuccess: (data) => {
      setArr((prevArr) => [...prevArr, data]);
      queryClient.invalidateQueries([Comments]);
    },
  });

  useQuery({
    queryKey: [Comments],
    queryFn: () => getComment(Number(id)),
    onSuccess: (data: ICommentProps[]) => {
      setArr(data);
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

  return (
    <>
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
        <S.ButtonContainer onClick={sendData}>
          <div style={{ marginLeft: '7px' }}>
            <SubmitArrow />
          </div>
        </S.ButtonContainer>
      </S.MessageContainer>
      <S.MessageList>
        {arr.map((data, i) => (
          <Comment data={data} key={i} />
        ))}
      </S.MessageList>
    </>
  );
};

export default MessageBox;
