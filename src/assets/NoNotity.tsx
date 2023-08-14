import React from 'react';
import theme from 'styles/theme';

interface SVGAttributeProps {
  width?: number;
  height?: number;
  color?: string;
}

const NoNotity = ({
  width = 88,
  height = 88,
  color = theme.grey[400],
}: SVGAttributeProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 89 89'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M88.4961 82.4167L6.32943 0.208328L0.996094 5.5L20.6628 25.1667C18.4128 29.375 17.2044 34.0833 17.2044 38.8333V63.8333L8.87109 72.1667V76.3333H71.8294L83.2044 87.7083L88.4961 82.4167ZM25.5378 68V38.8333C25.5378 36.2917 25.9961 33.7917 26.9544 31.4583L63.4961 68H25.5378ZM38.0378 80.5H54.7044C54.7044 82.7101 53.8265 84.8298 52.2636 86.3926C50.7008 87.9554 48.5812 88.8333 46.3711 88.8333C44.161 88.8333 42.0413 87.9554 40.4785 86.3926C38.9157 84.8298 38.0378 82.7101 38.0378 80.5ZM30.9128 14.2083C33.1211 12.7917 35.5378 11.75 38.0378 10.875C38.0378 10.4583 38.0378 10.0833 38.0378 9.66666C38.0378 7.45652 38.9157 5.33691 40.4785 3.7741C42.0413 2.2113 44.161 1.33333 46.3711 1.33333C48.5812 1.33333 50.7008 2.2113 52.2636 3.7741C53.8265 5.33691 54.7044 7.45652 54.7044 9.66666C54.7044 10.0833 54.7044 10.4583 54.7044 10.875C67.0794 14.5417 75.5378 25.9167 75.5378 38.8333V58.8333L67.2044 50.5V38.8333C67.2044 33.308 65.0095 28.0089 61.1025 24.1019C57.1955 20.1949 51.8964 18 46.3711 18C43.1211 18 39.9128 18.8333 37.0378 20.3333L30.9128 14.2083Z'
        fill={color}
      />
    </svg>
  );
};

export default NoNotity;
