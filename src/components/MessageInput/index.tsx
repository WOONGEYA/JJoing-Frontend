import React from 'react';
import * as S from './style';
import MessageArrowIcon from 'assets/MessageArrow';
import theme from 'styles/theme';

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
