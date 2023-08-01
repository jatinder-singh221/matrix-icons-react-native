import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PlayNextOutline = (props) => (
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
      d="M18 3v8.5m0 0L6.667 4.667A1.125 1.125 0 0 0 5 5.653v12.695a1.125 1.125 0 0 0 1.667.985L18 11.5Zm0 0V21"
    />
  </Svg>
);
export default PlayNextOutline;
