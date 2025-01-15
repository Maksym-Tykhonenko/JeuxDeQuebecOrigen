import * as React from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

export const Img = (props: SvgProps) => (
  <Svg width={37} height={36} viewBox="0 0 37 36" fill="none" {...props}>
    <Circle cx={18.5} cy={18} r={18} fill="#A8A8A8" />
    <Path
      d="M15.5 28H21.5C26.5 28 28.5 26 28.5 21V15C28.5 10 26.5 8 21.5 8H15.5C10.5 8 8.5 10 8.5 15V21C8.5 26 10.5 28 15.5 28Z"
      stroke="#F9F9F9"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.5 16C16.6046 16 17.5 15.1046 17.5 14C17.5 12.8954 16.6046 12 15.5 12C14.3954 12 13.5 12.8954 13.5 14C13.5 15.1046 14.3954 16 15.5 16Z"
      stroke="#F9F9F9"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.16992 24.9501L14.0999 21.6401C14.8899 21.1101 16.0299 21.1701 16.7399 21.7801L17.0699 22.0701C17.8499 22.7401 19.1099 22.7401 19.8899 22.0701L24.0499 18.5001C24.8299 17.8301 26.0899 17.8301 26.8699 18.5001L28.4999 19.9001"
      stroke="#F9F9F9"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
