import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ChevronHorizontalSolid = (props) => (
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
      d="M15 15.75 18.75 12 15 8.25m-6 7.5L5.25 12 9 8.25"
    />
  </Svg>
);
export default ChevronHorizontalSolid;
