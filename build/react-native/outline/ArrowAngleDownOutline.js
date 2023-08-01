import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowAngleDownOutline = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15 15-6 6m0 0-6-6m6 6V9a6 6 0 1 1 12 0v3"
    />
  </Svg>
);
export default ArrowAngleDownOutline;
