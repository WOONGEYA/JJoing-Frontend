import React from 'react';
import theme from 'styles/theme';

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
  color?: string;
  isOpened: boolean;
}

const DropIcon = ({
  width = 24,
  height = 24,
  color = theme.grey[900],
  isOpened,
  ...rest
}: SVGAttributeProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <path
        d={isOpened ? 'M7 15L12 10L17 15H7Z' : 'M7 10L12 15L17 10H7Z'}
        fill={color}
      />
    </svg>
  );
};

export default DropIcon;
