import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MagnificationAddOutline = (props) => (
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
      d="m16 16 5.5 5.5M9 7v2.5m0 0V12m0-2.5H6.5m2.5 0h2.5M16 9A7 7 0 1 1 2 9a7 7 0 0 1 14 0Z"
    />
  </Svg>
);
export default MagnificationAddOutline;
