import React from 'react';
import theme from 'styles/theme';

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

const EditIcon = ({
  width = 24,
  height = 24,
  color = theme.white,
}: SVGAttributeProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18.5076 11.8684L20.0196 10.2768C20.5476 9.72105 21.2196 9.41789 21.9516 9.3421V8.07895L14.7516 0.5H2.75156C1.41956 0.5 0.351562 1.62421 0.351562 3.02632V20.7105C0.351562 22.1 1.41956 23.2368 2.75156 23.2368H9.95156V20.8747L10.1076 20.7105H2.75156V3.02632H11.1516V11.8684H18.5076ZM13.5516 2.39474L20.1516 9.3421H13.5516V2.39474ZM19.7076 14.18L22.1556 16.7568L14.7996 24.5H12.3516V21.9232L19.7076 14.18ZM24.1716 14.6347L22.9956 15.8726L20.5476 13.2958L21.7236 12.0579C21.9516 11.8053 22.3476 11.8053 22.5876 12.0579L24.1716 13.7253C24.4116 13.9779 24.4116 14.3947 24.1716 14.6347Z'
        fill={color}
      />
    </svg>
  );
};

export default EditIcon;
