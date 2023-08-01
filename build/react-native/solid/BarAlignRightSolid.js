import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BarAlignRightSolid = (props) => (
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
      strokeWidth={3}
      d="M22 3H2m6 6.5h14m0 6.149H2M8 21h14"
    />
  </Svg>
);
export default BarAlignRightSolid;
