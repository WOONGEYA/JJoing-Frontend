import React from 'react';
import theme from 'styles/theme';

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

const MessageArrowIcon = ({
  width = 40,
  height = 40,
  color = theme.black,
  ...rest
}: SVGAttributeProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 40 40'
      fill='none'
      {...rest}
    >
      <path
        d='M20 32C20 33.4 20.26 34.74 20.7 36H4C1.8 36 0 34.22 0 32V4C0 1.8 1.8 0 4 0H32C34.22 0 36 1.8 36 4V20.7C34.74 20.26 33.4 20 32 20V4H4V32H20ZM21.92 18.58L16.42 25.66L12.5 20.94L7 28H20.7C21.5 25.76 22.94 23.82 24.8 22.42L21.92 18.58ZM34 30V24H30V30H24V34H30V40H34V34H40V30H34Z'
        fill='#6C757D'
      />
    </svg>
  );
};

export default MessageArrowIcon;
