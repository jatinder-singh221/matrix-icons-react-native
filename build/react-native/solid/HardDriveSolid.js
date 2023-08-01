import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HardDriveSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M5 2a3 3 0 0 0-3 3v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a3 3 0 0 0-3-3H5Z" />
    <Path
      fillRule="evenodd"
      d="M19 22a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3h14Zm-5-2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default HardDriveSolid;
