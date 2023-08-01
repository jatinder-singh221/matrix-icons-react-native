import * as React from "react";
import Svg, { Path } from "react-native-svg";
const XOutline = (props) => (
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
      d="M6 18 18 6M6 6l12 12"
    />
  </Svg>
);
export default XOutline;
