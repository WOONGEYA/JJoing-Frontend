import React from 'react';
import theme from 'styles/theme';

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

const CalendarIcon = ({
  width = 16,
  height = 16,
  color = theme.black,
  ...rest
}: SVGAttributeProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <path
        d='M6 7.16666V8.49999H4.66667V7.16666H6ZM8.66667 7.16666V8.49999H7.33333V7.16666H8.66667ZM11.3333 7.16666V8.49999H10V7.16666H11.3333ZM12.6667 2.49999C13.0203 2.49999 13.3594 2.64047 13.6095 2.89051C13.8595 3.14056 14 3.4797 14 3.83332V13.1667C14 13.5203 13.8595 13.8594 13.6095 14.1095C13.3594 14.3595 13.0203 14.5 12.6667 14.5H3.33333C2.59333 14.5 2 13.9 2 13.1667V3.83332C2 3.4797 2.14048 3.14056 2.39052 2.89051C2.64057 2.64047 2.97971 2.49999 3.33333 2.49999H4V1.16666H5.33333V2.49999H10.6667V1.16666H12V2.49999H12.6667ZM12.6667 13.1667V5.83332H3.33333V13.1667H12.6667ZM6 9.83332V11.1667H4.66667V9.83332H6ZM8.66667 9.83332V11.1667H7.33333V9.83332H8.66667ZM11.3333 9.83332V11.1667H10V9.83332H11.3333Z'
        fill={color}
      />
    </svg>
  );
};

export default CalendarIcon;
