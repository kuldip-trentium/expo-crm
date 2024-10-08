import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const PhoneIcon = ({ color, ...props }: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props} viewBox="0 0 22 22">
    <Path
      fill={color || '#969A99'}
      d="M3.54 2c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51Zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19ZM4.5 0H1C.45 0 0 .45 0 1c0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.84.84 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.149 15.149 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 0 1 5.5 1c0-.55-.45-1-1-1Z"
    />
  </Svg>
);
export default PhoneIcon;
