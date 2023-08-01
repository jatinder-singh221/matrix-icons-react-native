import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BarThreeSolid = (props) => (
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
      d="M4 4h17M4 12h17M4 20h17"
    />
  </Svg>
);
export default BarThreeSolid;
