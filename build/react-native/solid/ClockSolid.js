import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ClockSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm-.25-13a.75.75 0 0 0-1.5 0v4.575c0 .335.222.63.544.721l5 1.425a.75.75 0 0 0 .412-1.442l-4.456-1.27V9Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ClockSolid;
