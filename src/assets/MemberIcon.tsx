import React from 'react';
import theme from 'styles/theme';

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

const MemberIcon = ({
  width = 16,
  height = 16,
  color = theme.secondary,
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
        d='M7 14C7 14 6 14 6 13C6 12 7 9 11 9C15 9 16 12 16 13C16 14 15 14 15 14H7ZM11 8C11.7956 8 12.5587 7.68393 13.1213 7.12132C13.6839 6.55871 14 5.79565 14 5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2C10.2044 2 9.44129 2.31607 8.87868 2.87868C8.31607 3.44129 8 4.20435 8 5C8 5.79565 8.31607 6.55871 8.87868 7.12132C9.44129 7.68393 10.2044 8 11 8ZM5.216 14C5.06776 13.6878 4.99382 13.3455 5 13C5 11.645 5.68 10.25 6.936 9.28C6.30909 9.08684 5.65595 8.99237 5 9C1 9 0 12 0 13C0 14 1 14 1 14H5.216ZM4.5 8C5.16304 8 5.79893 7.73661 6.26777 7.26777C6.73661 6.79893 7 6.16304 7 5.5C7 4.83696 6.73661 4.20107 6.26777 3.73223C5.79893 3.26339 5.16304 3 4.5 3C3.83696 3 3.20107 3.26339 2.73223 3.73223C2.26339 4.20107 2 4.83696 2 5.5C2 6.16304 2.26339 6.79893 2.73223 7.26777C3.20107 7.73661 3.83696 8 4.5 8Z'
        fill={color}
      />
    </svg>
  );
};

export default MemberIcon;
