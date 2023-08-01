import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowBarLeftOutline = (props) => (
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
      d="M2.5 1.5v20m10.25-3L6.5 11m0 0 6.25-7.5M6.5 11h15"
    />
  </Svg>
);
export default ArrowBarLeftOutline;
