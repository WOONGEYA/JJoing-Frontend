import React from 'react';
import * as S from './style';
import SearchIcon from 'assets/SearchIcon';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'date' | 'search' | 'email' | 'url';
}

const Input = ({ width, height, type = 'text', ...rest }: InputProps) => {
  return (
    <S.InputContainer style={{ width, height }}>
      {type === 'search' && <SearchIcon />}
      <input type={type} style={{ width: '100%' }} {...rest} />
    </S.InputContainer>
  );
};

export default Input;
