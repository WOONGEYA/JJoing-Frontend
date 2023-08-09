import React from 'react';
import theme from 'styles/theme';

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

const BellIcon = ({
  width = 32,
  height = 32,
  color = theme.secondary,
}: SVGAttributeProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M28 25.3334V26.6667H4V25.3334L6.66667 22.6667V14.6667C6.66667 10.5334 9.37333 6.89335 13.3333 5.72002C13.3333 5.58669 13.3333 5.46669 13.3333 5.33335C13.3333 4.62611 13.6143 3.94783 14.1144 3.44774C14.6145 2.94764 15.2928 2.66669 16 2.66669C16.7072 2.66669 17.3855 2.94764 17.8856 3.44774C18.3857 3.94783 18.6667 4.62611 18.6667 5.33335C18.6667 5.46669 18.6667 5.58669 18.6667 5.72002C22.6267 6.89335 25.3333 10.5334 25.3333 14.6667V22.6667L28 25.3334ZM18.6667 28C18.6667 28.7073 18.3857 29.3855 17.8856 29.8856C17.3855 30.3857 16.7072 30.6667 16 30.6667C15.2928 30.6667 14.6145 30.3857 14.1144 29.8856C13.6143 29.3855 13.3333 28.7073 13.3333 28'
        fill={color}
      />
    </svg>
  );
};

export default BellIcon;
