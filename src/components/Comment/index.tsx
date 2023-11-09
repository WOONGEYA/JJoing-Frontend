import MessageIcon from 'assets/MessageIcon';
import * as S from './style';
import theme from 'styles/theme';
import { useState } from 'react';
import SubmitArrow from 'assets/SubmitArrow';
import MessageInput from 'components/MessageInput';

interface CommentProps {
  data: string;
}

const Comment = ({ data }: CommentProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.CommentContainer>
      <S.ProfileContainer>
        <S.Circle />
      </S.ProfileContainer>
      <S.ProfileChatContainer>
        <S.ProfileChatTitle>
          <S.UserProfile>
            <S.UserView>박우빈</S.UserView>
            <S.DateView>2023.11.17 11:17</S.DateView>
          </S.UserProfile>
          <S.CountView>
            <MessageIcon color={theme.grey[500]} />
            20
          </S.CountView>
        </S.ProfileChatTitle>
        <S.CommentWrapper
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {data}
        </S.CommentWrapper>
        {isOpen && (
          <S.MessageContainer>
            <MessageInput
              width={'95%'}
              placeholder='타인의 권리를 침해하거나 명예를 훼손하는 댓글은 제재를 받을 수 있습니다.'
              type='search'
              // value={userInput}
              // onChange={(e) => setUserInput(e.target.value)}
            />
            <S.ButtonContainer>
              <div style={{ marginLeft: '7px' }}>
                <SubmitArrow />
              </div>
            </S.ButtonContainer>
          </S.MessageContainer>
        )}
      </S.ProfileChatContainer>
    </S.CommentContainer>
  );
};

export default Comment;
