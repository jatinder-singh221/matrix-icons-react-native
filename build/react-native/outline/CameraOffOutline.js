import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CameraOffOutline = (props) => (
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
      d="M4 5.333a3 3 0 0 0-3 3V19a3 3 0 0 0 3 3h14c.768 0 1.47-.289 2-.764M7 3.666C7 2.747 7.746 2 8.667 2h4.666C14.253 2 15 2.746 15 3.667c0 .92.746 1.666 1.667 1.666H18a3 3 0 0 1 3 3V17m-7.203-1.913a3.001 3.001 0 1 1-4.193-3.743M3 2l19 19"
    />
  </Svg>
);
export default CameraOffOutline;
