import React from 'react';
import theme from 'styles/theme';

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

const UploadImage = ({
  width = 40,
  height = 40,
  color = theme.grey[600],
  ...rest
}: SVGAttributeProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 41 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M20.5 32C20.5 33.4 20.76 34.74 21.2 36H4.5C2.3 36 0.5 34.22 0.5 32V4C0.5 1.8 2.3 0 4.5 0H32.5C34.72 0 36.5 1.8 36.5 4V20.7C35.24 20.26 33.9 20 32.5 20V4H4.5V32H20.5ZM22.42 18.58L16.92 25.66L13 20.94L7.5 28H21.2C22 25.76 23.44 23.82 25.3 22.42L22.42 18.58ZM34.5 30V24H30.5V30H24.5V34H30.5V40H34.5V34H40.5V30H34.5Z'
        fill={color}
      />
    </svg>
  );
};

export default UploadImage;
