import React from 'react';
import theme from 'styles/theme';

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

const MessageIcon = ({
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
        d='M12.0007 5.33325H4.00065V3.99992H12.0007V5.33325ZM12.0007 7.33325H4.00065V5.99992H12.0007V7.33325ZM12.0007 9.33325H4.00065V7.99992H12.0007V9.33325ZM14.6673 2.66659C14.6673 2.31296 14.5268 1.97382 14.2768 1.72378C14.0267 1.47373 13.6876 1.33325 13.334 1.33325H2.66732C2.3137 1.33325 1.97456 1.47373 1.72451 1.72378C1.47446 1.97382 1.33398 2.31296 1.33398 2.66659V10.6666C1.33398 11.0202 1.47446 11.3593 1.72451 11.6094C1.97456 11.8594 2.3137 11.9999 2.66732 11.9999H12.0007L14.6673 14.6666V2.66659Z'
        fill={color}
      />
    </svg>
  );
};

export default MessageIcon;
