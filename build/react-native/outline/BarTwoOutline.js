import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BarTwoOutline = (props) => (
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
      d="M3 5h17M3 19h17"
    />
  </Svg>
);
export default BarTwoOutline;
