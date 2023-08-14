import React from 'react';
import theme from 'styles/theme';

interface SVGAttributeProps {
  width?: number;
  height?: number;
  color?: string;
}

const Trash = ({
  width = 16,
  height = 18,
  color = theme.red,
}: SVGAttributeProps) => {
  return (
    <div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={width}
        height={height}
        viewBox='0 0 17 17'
        fill='none'
      >
        <path
          d='M6.41146 2.5V3.16667H3.07812V4.5H3.74479V13.1667C3.74479 13.5203 3.88527 13.8594 4.13532 14.1095C4.38536 14.3595 4.7245 14.5 5.07812 14.5H11.7448C12.0984 14.5 12.4376 14.3595 12.6876 14.1095C12.9376 13.8594 13.0781 13.5203 13.0781 13.1667V4.5H13.7448V3.16667H10.4115V2.5H6.41146ZM5.07812 4.5H11.7448V13.1667H5.07812V4.5ZM6.41146 5.83333V11.8333H7.74479V5.83333H6.41146ZM9.07812 5.83333V11.8333H10.4115V5.83333H9.07812Z'
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Trash;
