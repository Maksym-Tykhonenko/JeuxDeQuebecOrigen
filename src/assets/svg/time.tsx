import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const Time = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M9.99935 17.0833C13.9114 17.0833 17.0827 13.912 17.0827 9.99999C17.0827 6.08797 13.9114 2.91666 9.99935 2.91666C6.08733 2.91666 2.91602 6.08797 2.91602 9.99999C2.91602 13.912 6.08733 17.0833 9.99935 17.0833Z"
      stroke="#151515"
    />
    <Path
      d="M13.75 9.99998H10.2083C10.1531 9.99998 10.1001 9.97803 10.061 9.93896C10.0219 9.89989 10 9.8469 10 9.79165V7.08331"
      stroke="#151515"
      strokeLinecap="round"
    />
  </Svg>
);
