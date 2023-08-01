import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ChevronDoubleDownSolid = (props) => (
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
      d="m19.5 11.25-7.5 7.5-7.5-7.5m15-6-7.5 7.5-7.5-7.5"
    />
  </Svg>
);
export default ChevronDoubleDownSolid;
