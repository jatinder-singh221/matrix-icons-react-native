import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ExpandUpOutline = (props) => (
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
      d="M7 2H2v5m0 10v5h5m10 0h5v-5m0-10V2h-5"
    />
  </Svg>
);
export default ExpandUpOutline;
