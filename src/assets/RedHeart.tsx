import React from 'react';
import theme from 'styles/theme';

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
}

const RedHeartIcon = ({
  width = 16,
  height = 16,
  color = theme.red,
  ...rest
}: SVGAttributeProps) => {
  return (
    <svg
      {...rest}
      width={width}
      height={height}
      cursor='pointer'
      viewBox='0 0 15 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.42676 12.9334L6.41176 12.0094C2.80676 8.74038 0.426758 6.57738 0.426758 3.93838C0.426758 1.77538 2.12076 0.0883789 4.27676 0.0883789C5.49476 0.0883789 6.66376 0.655379 7.42676 1.54438C8.18976 0.655379 9.35876 0.0883789 10.5768 0.0883789C12.7328 0.0883789 14.4268 1.77538 14.4268 3.93838C14.4268 6.57738 12.0468 8.74038 8.44176 12.0094L7.42676 12.9334Z'
        fill={color}
      />
    </svg>
  );
};

export default RedHeartIcon;
