import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ChevronVerticleOutline = (props) => (
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
      d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
    />
  </Svg>
);
export default ChevronVerticleOutline;
