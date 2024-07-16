import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const Dashboard = ({ color, ...props }: SvgProps) => {
  return (
    <Svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M3 3h8v10H3V3zm2 2v6h4V5H5zm8-2h8v6h-8V3zm2 2v2h4V5h-4zm-2 6h8v10h-8V11zm2 2v6h4v-6h-4zM3 15h8v6H3v-6zm2 2v2h4v-2H5z"
        fill={color || '#000'}
      />
    </Svg>
  );
};

export default Dashboard;
