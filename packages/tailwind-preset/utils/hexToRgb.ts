const hexToRgb = (hex: string) =>
  hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (_, r: string, g: string, b: string) => `#${r}${r}${g}${g}${b}${b}`,
    )
    .substring(1)
    .match(/.{2}/g)
    ?.map((x: string) => parseInt(x, 16))
    .join(' ') || null;

export default hexToRgb;
