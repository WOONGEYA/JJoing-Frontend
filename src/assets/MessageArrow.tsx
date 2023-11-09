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
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill='none'
      {...rest}
    >
      <path
        d='M16.914 0V9C16.914 10.0609 16.4926 11.0783 15.7424 11.8284C14.9923 12.5786 13.9749 13 12.914 13H3.828L6.328 15.5L4.914 16.914L0 12L4.914 7.086L6.328 8.5L3.828 11H12.914C13.4444 11 13.9531 10.7893 14.3282 10.4142C14.7033 10.0391 14.914 9.53043 14.914 9V0H16.914Z'
        fill={color}
      />
    </svg>
  );
};

export default MessageArrowIcon;
