import React from 'react';
import * as S from './style';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
}

const MessageInput = ({
  width,
  height,
  type = 'text',
  ...rest
}: InputProps) => {
  return (
    <S.InputContainer style={{ width, height }}>
      <S.InputText type={type} {...rest} />
    </S.InputContainer>
  );
};

export default MessageInput;
