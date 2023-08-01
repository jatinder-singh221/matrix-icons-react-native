import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowUpSolid = (props) => (
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
      d="M11.465 21V3m0 0L4 10.853M11.465 3 19 10.853"
    />
  </Svg>
);
export default ArrowUpSolid;
