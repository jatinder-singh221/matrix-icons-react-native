import * as React from "react";
import Svg, { Path } from "react-native-svg";
const GridOutline = (props) => (
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
      strokeWidth={1.5}
      d="M8.5 2v20m7-20v20m6-6h-19m0-8h19M3 22h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1Z"
    />
  </Svg>
);
export default GridOutline;
