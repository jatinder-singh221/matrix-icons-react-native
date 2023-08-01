import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowBarDownSolid = (props) => (
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
      d="M2 21h20m-3-10.25L11.5 17m0 0L4 10.75M11.5 17V2"
    />
  </Svg>
);
export default ArrowBarDownSolid;
