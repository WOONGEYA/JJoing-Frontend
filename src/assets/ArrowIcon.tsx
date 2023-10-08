import React from 'react';
import theme from 'styles/theme';

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
  color?: string;
  direction?: 'left' | 'right' | 'top' | 'bottom';
}

const path = {
  top: 'M14.84 30.82L24 21.66L33.18 30.82L36 28L24 16L12 28L14.84 30.82Z',
  right: 'M17.18 14.84L26.34 24L17.18 33.18L20 36L32 24L20 12L17.18 14.84Z',
  bottom: 'M33.16 17.18L24 26.34L14.82 17.18L12 20L24 32L36 20L33.16 17.18Z',
  left: 'M30.82 33.16L21.66 24L30.82 14.82L28 12L16 24L28 36L30.82 33.16Z',
};

const ArrowIcon = ({
  width = 32,
  height = 32,
  color = theme.secondary,
  direction = 'left',
  ...rest
}: SVGAttributeProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 48 48'
      fill='none'
      {...rest}
    >
      <path d={path[direction]} fill={color} />
    </svg>
  );
};

export default ArrowIcon;
