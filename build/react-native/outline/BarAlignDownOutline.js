import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BarAlignDownOutline = (props) => (
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
      d="M22 3H4.684m5.195 6.5H22m0 6.149H9.879m0 5.351H22M4.684 9.5V21m0 0 2.597-3m-2.597 3L2 18"
    />
  </Svg>
);
export default BarAlignDownOutline;
