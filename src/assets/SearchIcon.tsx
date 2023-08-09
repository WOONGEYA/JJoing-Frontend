import React from 'react';
import theme from 'styles/theme';

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

const SearchIcon = ({
  width = 16,
  height = 16,
  color = theme.grey[600],
}: SVGAttributeProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.33333 2C7.4826 2 8.58481 2.45655 9.39746 3.2692C10.2101 4.08186 10.6667 5.18406 10.6667 6.33333C10.6667 7.40667 10.2733 8.39333 9.62667 9.15333L9.80667 9.33333H10.3333L13.6667 12.6667L12.6667 13.6667L9.33333 10.3333V9.80667L9.15333 9.62667C8.39333 10.2733 7.40667 10.6667 6.33333 10.6667C5.18406 10.6667 4.08186 10.2101 3.2692 9.39746C2.45655 8.58481 2 7.4826 2 6.33333C2 5.18406 2.45655 4.08186 3.2692 3.2692C4.08186 2.45655 5.18406 2 6.33333 2ZM6.33333 3.33333C4.66667 3.33333 3.33333 4.66667 3.33333 6.33333C3.33333 8 4.66667 9.33333 6.33333 9.33333C8 9.33333 9.33333 8 9.33333 6.33333C9.33333 4.66667 8 3.33333 6.33333 3.33333Z'
        fill={color}
      />
    </svg>
  );
};

export default SearchIcon;
