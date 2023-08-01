import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ChartPieSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M10.333 5.333a8.333 8.333 0 1 0 8.334 8.334h-8.334V5.333Z" />
    <Path d="M13.667 10.333H22A8.333 8.333 0 0 0 13.667 2v8.333Z" />
  </Svg>
);
export default ChartPieSolid;
