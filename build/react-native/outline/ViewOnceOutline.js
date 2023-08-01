import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ViewOnceOutline = (props) => (
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
      strokeWidth={1.5}
      d="m8.584 9.376 3-2A.75.75 0 0 1 12.75 8v9M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </Svg>
);
export default ViewOnceOutline;
