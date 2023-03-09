import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

export const IconSvgGraph = () => {
  return (
    <Svg 
      viewBox='0 -7 33 33'
      fill='none'
    >
      <G
        fill='none'
        fillRule='evenodd'
        stroke='#000'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <Path d='M4.5 3.5v11a2 2 0 0 0 2 2h11' strokeWidth={1.3} />
        <Path d='m6.5 12.5 3-3 2 2 5-5' strokeWidth={1.3} />
        <Path d='M16.5 9.5v-3h-3' strokeWidth={1.3} />
      </G>
    </Svg>
  );
}