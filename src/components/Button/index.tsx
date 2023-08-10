import React from 'react';
import theme from 'styles/theme';
import * as S from './style';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  padding?: string;
  background?: string;
}

const Button = ({
  padding = '8px 20px',
  background = theme.primary,
  value,
  ...rest
}: ButtonProps) => {
  return (
    <S.ButtonContainer style={{ background, padding }} {...rest}>
      {value}
    </S.ButtonContainer>
  );
};

export default Button;
