import React from 'react';
import Drop from 'assets/Drop';
import * as S from './style';

interface OptionPropsType {
  name: string;
}

const Option = ({ name }: OptionPropsType) => {
  return (
    <S.Container>
      <S.OptionWrapper>
        <S.OptionName>{name}</S.OptionName>
        <Drop />
      </S.OptionWrapper>
    </S.Container>
  );
};

export default Option;
