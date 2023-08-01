import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BarAlignLeftOutline = (props) => (
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
      d="M2 3h20m-6 6.5H2m0 6.149h20M16 21H2"
    />
  </Svg>
);
export default BarAlignLeftOutline;
