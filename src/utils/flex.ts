// flex.ts
import { CSSProperties } from 'react';
import { css, SerializedStyles } from '@emotion/react';

interface FlexOptions {
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  direction?: CSSProperties['flexDirection'];
}

function flex(options: FlexOptions): SerializedStyles;
function flex(
  align: CSSProperties['alignItems'],
  justify?: CSSProperties['justifyContent'],
  direction?: CSSProperties['flexDirection'],
): SerializedStyles;
function flex(
  alignOrOptions: FlexOptions | CSSProperties['alignItems'],
  justify?: CSSProperties['justifyContent'],
  direction?: CSSProperties['flexDirection'],
): SerializedStyles {
  let align: CSSProperties['alignItems'];
  if (typeof alignOrOptions === 'object') {
    ({
      align = 'stretch',
      justify = 'flex-start',
      direction = 'row',
    } = alignOrOptions);
  } else {
    align = alignOrOptions;
  }

  return css`
    display: flex;
    align-items: ${align};
    justify-content: ${justify};
    flex-direction: ${direction};
  `;
}

export default flex;
