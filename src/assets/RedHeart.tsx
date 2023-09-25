import React from 'react';
import theme from 'styles/theme';

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
}

const BellIcon = ({
  width = 18,
  height = 18,
  color = theme.red,
  ...rest
}: SVGAttributeProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <path
        d='M7.06732 10.8667L7.00065 10.9333L6.92732 10.8667C3.76065 7.99333 1.66732 6.09333 1.66732 4.16667C1.66732 2.83333 2.66732 1.83333 4.00065 1.83333C5.02732 1.83333 6.02732 2.5 6.38065 3.40667H7.62065C7.97398 2.5 8.97398 1.83333 10.0007 1.83333C11.334 1.83333 12.334 2.83333 12.334 4.16667C12.334 6.09333 10.2407 7.99333 7.06732 10.8667ZM10.0007 0.5C8.84065 0.5 7.72732 1.04 7.00065 1.88667C6.27398 1.04 5.16065 0.5 4.00065 0.5C1.94732 0.5 0.333984 2.10667 0.333984 4.16667C0.333984 6.68 2.60065 8.74 6.03398 11.8533L7.00065 12.7333L7.96732 11.8533C11.4007 8.74 13.6673 6.68 13.6673 4.16667C13.6673 2.10667 12.054 0.5 10.0007 0.5Z'
        fill={color}
      />
    </svg>
  );
};

export default BellIcon;
