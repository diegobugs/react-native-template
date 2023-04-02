export function shadeColor(color: string, percent: 'pressed' | number) {
  let _percent: number;
  if (percent === 'pressed') {
    _percent = 15;
  } else {
    _percent = percent;
  }
  let R: number = parseInt(color.substring(1, 3), 16);
  let G: number = parseInt(color.substring(3, 5), 16);
  let B: number = parseInt(color.substring(5, 7), 16);

  R = Math.round((R * (100 + _percent)) / 100);
  G = Math.round((G * (100 + _percent)) / 100);
  B = Math.round((B * (100 + _percent)) / 100);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  const RR =
    R.toString(16).length === 1 ? '0' + R.toString(16) : R.toString(16);
  const GG =
    G.toString(16).length === 1 ? '0' + G.toString(16) : G.toString(16);
  const BB =
    B.toString(16).length === 1 ? '0' + B.toString(16) : B.toString(16);

  return '#' + RR + GG + BB;
}

export function grayScale(color: string) {
  const R: number = parseInt(color.substring(1, 3), 16);
  const G: number = parseInt(color.substring(3, 5), 16);
  const B: number = parseInt(color.substring(5, 7), 16);
  const average = Math.round((R + G + B) / 3);
  const hexa =
    average.toString(16).length === 1
      ? '0' + average.toString(16)
      : average.toString(16);
  return '#' + hexa + hexa + hexa;
}
