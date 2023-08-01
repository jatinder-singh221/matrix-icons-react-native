import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowAngleLeftSolid = (props) => (
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
      strokeWidth={3}
      d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 1 1 0 12h-3"
    />
  </Svg>
);
export default ArrowAngleLeftSolid;
