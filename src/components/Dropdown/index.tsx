import React from 'react';
import DropImg from 'assets/drop.svg';
import * as S from './style';

interface OptionPropsType {
  name: string;
}

const Option = ({ name }: OptionPropsType) => {
  return (
    <S.Container>
      <S.OptionWrapper>
        <S.OptionName>{name}</S.OptionName>
        <img src={DropImg} alt='drop' />
      </S.OptionWrapper>
    </S.Container>
  );
};

export default Option;
