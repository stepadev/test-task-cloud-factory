import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const IconSvgHome = () => {
  return (
    <Svg
      width={22}
      height={21}
      fill='none'
    >
      <Path
        d='m1.453 10.751 9.524-9.73 9.524 9.73c.29.295.453.696.453 1.12v7.585c0 .319-.25.544-.511.544h-5.479a.51.51 0 0 1-.492-.524v-4.587c0-1.94-1.545-3.549-3.495-3.549-1.95 0-3.495 1.61-3.495 3.549v4.587a.51.51 0 0 1-.491.524H1.51A.531.531 0 0 1 1 19.456V11.87c0-.424.164-.825.453-1.12Z'
        stroke='#000'
        strokeWidth={2}
      />
    </Svg>
  );
}