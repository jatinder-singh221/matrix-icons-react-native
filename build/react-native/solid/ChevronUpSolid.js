import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ChevronUpSolid = (props) => (
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
      strokeWidth={3}
      d="m4.5 15.75 7.5-7.5 7.5 7.5"
    />
  </Svg>
);
export default ChevronUpSolid;
