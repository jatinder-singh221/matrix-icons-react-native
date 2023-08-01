import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PlayPreviousOutline = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M5 21v-9m0 0 11.333 7.333c.75.412 1.667-.13 1.667-.986V5.652a1.125 1.125 0 0 0-1.667-.985L5 12Zm0 0V3"
    />
  </Svg>
);
export default PlayPreviousOutline;
