import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowBarUpOutline = (props) => (
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
      d="M22 3H2m3 10.25L12.5 7m0 0 7.5 6.25M12.5 7v15"
    />
  </Svg>
);
export default ArrowBarUpOutline;
