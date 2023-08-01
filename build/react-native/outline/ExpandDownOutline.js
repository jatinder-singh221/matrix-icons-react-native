import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ExpandDownOutline = (props) => (
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
      d="M17 2v5h5M7 2v5H2m0 10h5v5m15-5h-5v5"
    />
  </Svg>
);
export default ExpandDownOutline;
