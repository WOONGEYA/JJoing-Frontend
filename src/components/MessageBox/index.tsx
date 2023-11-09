import MessageInput from 'components/MessageInput';
import * as S from './style';
import SubmitArrowIcon from 'assets/SubmitArrowIcon.svg';
import { useState } from 'react';
import Comment from 'components/Comment';

const MessageBox = () => {
  const [userInput, setUserInput] = useState('');
  const [arr, setArr] = useState<string[]>([]);

  const sendData = () => {
    setArr((prev) => [...prev, userInput]);
    setUserInput('');
  };

  console.log(userInput);
  console.log(arr);
  return (
    <>
      <S.MessageContainer>
        <MessageInput
          width={'95%'}
          placeholder='타인의 권리를 침해하거나 명예를 훼손하는 댓글은 제재를 받을 수 있습니다.'
          type='search'
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <S.SubmitBtn src={SubmitArrowIcon} alt='img' onClick={sendData} />
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
