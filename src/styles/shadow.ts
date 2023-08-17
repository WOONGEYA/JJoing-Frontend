const shadowGenerator = (
  offsetX: number,
  offsetY: number,
  blurRadius: number,
  spreadRadius: number,
  color: string,
) => `
    box-shadow: ${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px rgba(${color});
  `;

export const shadow = {
  shadow1: shadowGenerator(2, 4, 20, 0, '0, 0, 0, 0.05'),
  shadow2: shadowGenerator(0, 1, 4, 0, '0, 0, 0, 0.20'),
};
