import { Dispatch, SetStateAction, useState } from 'react';
import * as S from './style';
import { IRecomment } from 'types/IRecomment';
import { useRecoilValue } from 'recoil';
import { userKey } from 'apis/recoil';
import Input from 'components/Input';
import { useMutation, useQueryClient } from 'react-query';
import { ReComent } from 'contents/queryKey';
import { deleteReMent, putReComments } from 'apis';

interface IRecommentProps {
  data: IRecomment;
  setDetailRecomments: Dispatch<SetStateAction<boolean>>;
  detailRecomments: boolean;
  isLastRecomment: boolean;
}

const Recomment = ({
  data,
  setDetailRecomments,
  detailRecomments,
  isLastRecomment,
}: IRecommentProps) => {
  const myId = useRecoilValue(userKey);
  const [open, setOpen] = useState(false);
  const [modInput, setModInput] = useState(data.content);
  const queryClient = useQueryClient();
  console.log(data.id);

  const closeRecomment = () => {
    setDetailRecomments(!detailRecomments);
  };

  const ModifyComment = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const delComment = useMutation({
    mutationKey: [ReComent],
    mutationFn: () => deleteReMent(Number(data.id)),
    onSuccess: () => {
      queryClient.invalidateQueries([ReComent]);
    },
  });

  const DeleteComment = () => {
    delComment.mutate();
  };

  const changeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModInput(e.target.value);
  };

  const putC = useMutation({
    mutationKey: [ReComent],
    mutationFn: () => putReComments(Number(data.id), modInput),
    onSuccess: () => {
      queryClient.invalidateQueries([ReComent]);
    },
  });

  const putComment = () => {
    putC.mutate();
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
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
            </S.CountView>
          </S.ProfileChatTitle>
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
          <S.CommentWrapper />
        </S.ProfileChatContainer>
      </S.CommentContainer>
      {isLastRecomment && (
        <S.CloseRecomment onClick={closeRecomment}>댓글 닫기</S.CloseRecomment>
      )}
    </>
  );
};

export default Recomment;
