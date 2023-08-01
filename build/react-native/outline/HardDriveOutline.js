import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HardDriveOutline = (props) => (
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
      strokeWidth={1.5}
      d="M2 15V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10M2 15a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1M2 15v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4m-8.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm3.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
    />
  </Svg>
);
export default HardDriveOutline;
