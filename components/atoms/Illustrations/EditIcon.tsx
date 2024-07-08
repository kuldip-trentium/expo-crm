import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const EditIcon = ({ color, ...props }: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={color || '#ffffff'}
      fillRule="evenodd"
      d="m19.06 3.59 1.35 1.35c.79.78.79 2.05 0 2.83L7.18 21H3v-4.18L13.4 6.41l2.83-2.82c.78-.78 2.05-.78 2.83 0ZM5 19l1.41.06 9.82-9.83-1.41-1.41L5 17.64V19Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default EditIcon;
