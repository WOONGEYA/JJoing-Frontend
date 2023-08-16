import React from 'react';
import * as S from './style';

interface TooltipType extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  value: string;
}

const Tooltip = ({ children, value, ...rest }: TooltipType) => {
  const [isOnMouseOver, setIsOnMouseOver] = React.useState(false);

  const handleMouseOver = () => {
    setIsOnMouseOver(!isOnMouseOver);
  };

  return (
    <S.TooltipContainer
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOver}
    >
      <div>{children}</div>
      <S.TooltipText {...rest} visible={isOnMouseOver}>
        {value}
      </S.TooltipText>
    </S.TooltipContainer>
  );
};

export default Tooltip;
