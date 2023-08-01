import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowBarRightSolid = (props) => (
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
      d="M21.5 21.5v-20m-10.25 3L17.5 12m0 0-6.25 7.5M17.5 12h-15"
    />
  </Svg>
);
export default ArrowBarRightSolid;
