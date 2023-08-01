import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SwatchOutline = (props) => (
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
      strokeWidth={1.5}
      d="M10.557 20.682c-.844.844-2.614 1.068-3.807 1.068m3.807-1.068c.806-.806.65-2.136.69-3.272m-.69 3.272S19.465 13 20.5 13c1.035 0 1.25.589 1.25 1.625v5.25a1.875 1.875 0 0 1-1.875 1.875H6.75m0 0a4.5 4.5 0 0 1-4.5-4.5V4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V6.5m0 0v10.75c0 .054-.001.107-.003.16M11.25 6.5l1.499-1.614.1-.099a1.875 1.875 0 0 1 2.651 0L19.212 8.5a1.875 1.875 0 0 1 0 2.651l-7.965 6.26m-4.497.964a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
    />
  </Svg>
);
export default SwatchOutline;
