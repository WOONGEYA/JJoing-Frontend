const fontGenerator = (
  weight: number,
  size: number,
  lineHeight: number,
  letterSpacing: number,
) => `
      font-weight: ${weight};
      font-size: ${size}px;
      line-height: ${lineHeight}%;
      letter-spacing: ${letterSpacing}px;
      `;

export const font = {
  $titleLarge: fontGenerator(700, 32, 150, 0),
  $title01: fontGenerator(600, 26, 150, 0),
  $title02: fontGenerator(600, 22, 150, 0),
  $title03: fontGenerator(500, 20, 150, 0),
  $body: fontGenerator(500, 16, 150, 0),
  $headline: fontGenerator(500, 15, 150, 0),
  $callout: fontGenerator(400, 14, 150, 0),
  $subhead: fontGenerator(400, 13, 150, 0),
  $footnote: fontGenerator(400, 12, 150, 0),
  $caption: fontGenerator(400, 11, 150, 0),
  $hugeTitle: fontGenerator(500, 50, 150, 0),
  $subTitle: fontGenerator(300, 25, 150, 0),
};
