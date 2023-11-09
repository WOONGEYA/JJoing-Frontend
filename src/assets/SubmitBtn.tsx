import React from 'react';
import theme from 'styles/theme';

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

const MessageArrowIcon = ({
  width = 20,
  height = 20,
  color = theme.black,
  ...rest
}: SVGAttributeProps) => {
  return (
    <svg
      width='10'
      height='16'
      viewBox='0 0 10 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M2 2L8 8L2 14' stroke='white' />
    </svg>
  );
};

export default MessageArrowIcon;
