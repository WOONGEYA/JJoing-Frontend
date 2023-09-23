import React from 'react';
import * as S from './style';

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const Tag = ({ value, ...rest }: TagProps) => {
  return (
    <S.TagContainer {...rest}>
      <S.TagText>{value}</S.TagText>
    </S.TagContainer>
  );
};

export default Tag;
