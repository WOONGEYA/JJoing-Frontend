import React from 'react';
import SearchIcon from 'assets/SearchIcon';
import * as S from './style';
import { font } from 'styles/font';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
}

const Input = ({ width, height, type = 'text', ...rest }: InputProps) => {
  return (
    <S.InputContainer style={{ width, height }}>
      {type === 'search' && <SearchIcon />}
      <S.InputText type={type} {...rest} />
    </S.InputContainer>
  );
};

export default Input;
