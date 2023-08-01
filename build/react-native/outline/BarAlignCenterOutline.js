import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BarAlignCenterOutline = (props) => (
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
      d="M2 3h20m-2 4.5H4M2 12h20m-2 4.5H4M2 21h20"
    />
  </Svg>
);
export default BarAlignCenterOutline;
