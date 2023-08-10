import React from 'react';
import theme from 'styles/theme';

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

const DropIcon = ({
  width = 24,
  height = 24,
  color = theme.grey[600],
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
      <g clipPath='url(#clip0_3640_575)'>
        <path
          d='M7.41 8L12 12.58L16.59 8L18 9.41L12 15.41L6 9.41L7.41 8Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_3640_575'>
          <rect width={width} height={height} fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DropIcon;
