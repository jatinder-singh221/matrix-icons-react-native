import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowAngleUpSolid = (props) => (
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
      d="M15 9 9 3m0 0L3 9m6-6v12a6 6 0 1 0 12 0v-3"
    />
  </Svg>
);
export default ArrowAngleUpSolid;
