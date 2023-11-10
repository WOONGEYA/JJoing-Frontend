import React from 'react';
import theme from 'styles/theme';

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

const SubmitArrow = ({
  width = 18,
  height = 18,
  color = theme.black,
  ...rest
}: SVGAttributeProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill='none'
      {...rest}
    >
      <path
        d='M2 2L8 8L2 14'
        stroke='white'
        strokeWidth='3.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default SubmitArrow;
