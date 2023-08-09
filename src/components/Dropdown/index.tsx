import React from 'react';
import DropIcon from 'assets/DropIcon';
import * as S from './style';

interface OptionPropsType {
  name: string;
}

const Option = ({ name }: OptionPropsType) => {
  return (
    <S.Container>
      <S.OptionWrapper>
        <S.OptionName>{name}</S.OptionName>
        <DropIcon />
      </S.OptionWrapper>
    </S.Container>
  );
};

export default Option;
