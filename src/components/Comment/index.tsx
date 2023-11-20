import MessageIcon from 'assets/MessageIcon';
import * as S from './style';
import theme from 'styles/theme';
import { useEffect, useState } from 'react';
import SubmitArrow from 'assets/SubmitArrow';
import MessageInput from 'components/MessageInput';
import { ICommentProps } from 'types/IComponentsProps';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Comments, ReComent } from 'contents/queryKey';
import { deleteMent, getReComment, postReComment, putComments } from 'apis';
import { IRecomment } from 'types/IRecomment';
import Recomment from 'components/ReComment';
import { toast } from 'react-toastify';
import { useRecoilValue } from 'recoil';
import { userKey } from 'apis/recoil';
import Input from 'components/Input';

const Comment = ({ data }: { data: ICommentProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [modInput, setModInput] = useState(data.content);
  const [arr, setArr] = useState<IRecomment[]>([]);
  const [open, setOpen] = useState(false);
  const [detailRecomments, setDetailRecomments] = useState(false);
  const myId = useRecoilValue(userKey);

  const queryClient = useQueryClient();

  const commentMutate = useMutation({
    mutationKey: [ReComent],
    mutationFn: () => postReComment(Number(data.id), userInput),
    onSuccess: (data) => {
      setArr((prevArr) => [...prevArr, data]);
      queryClient.invalidateQueries([ReComent]);
    },
  });

  console.log('data', data);
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

  const recommentOpen = () => {
    setDetailRecomments(!detailRecomments);
  };

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

  const delComment = useMutation({
    mutationKey: [Comments],
    mutationFn: () => deleteMent(Number(data.id)),
    onSuccess: () => {
      queryClient.invalidateQueries([Comments]);
    },
  });

  const DeleteComment = () => {
    delComment.mutate();
  };

  const ModifyComment = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const changeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModInput(e.target.value);
  };

  const putC = useMutation({
    mutationKey: [Comments],
    mutationFn: () => putComments(Number(data.id), modInput),
    onSuccess: () => {
      queryClient.invalidateQueries([Comments]);
    },
  });

  const putComment = () => {
    putC.mutate();
    setOpen((prevOpen) => !prevOpen);
  };

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
            {myId == data.userId ? (
              <>
                {open ? (
                  <S.Btn onClick={ModifyComment}>수정 취소</S.Btn>
                ) : (
                  <S.Btn onClick={ModifyComment}>수정</S.Btn>
                )}
                <S.Btn onClick={DeleteComment}>삭제</S.Btn>
              </>
            ) : null}
            <S.FlexBox>
              <div
                style={{ marginRight: '10px', cursor: 'pointer' }}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                답글
              </div>
              <MessageIcon color={theme.grey[500]} />
              {data.reCommentCount}
            </S.FlexBox>
          </S.CountView>
        </S.ProfileChatTitle>
        <S.CommentWrapper
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {open ? (
            <Input
              value={modInput}
              onChange={changeComment}
              onKeyPress={(e: React.KeyboardEvent) => {
                if (e.key === 'Enter') {
                  putComment();
                }
              }}
            />
          ) : (
            <p>{data.content}</p>
          )}
        </S.CommentWrapper>

        {detailRecomments && arr.length > 0 ? (
          <>
            {arr.map((data, index) => (
              <Recomment
                data={data}
                key={index}
                detailRecomments={detailRecomments}
                setDetailRecomments={setDetailRecomments}
                isLastRecomment={index === arr.length - 1}
              />
            ))}
          </>
        ) : (
          arr.length > 0 && (
            <S.DetialComment onClick={recommentOpen}>
              댓글 상세보기
            </S.DetialComment>
          )
        )}
        {open == false && isOpen && (
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
