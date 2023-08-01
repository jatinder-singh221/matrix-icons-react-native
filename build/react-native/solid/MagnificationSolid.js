import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MagnificationSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14Zm13.187 5.127L16.53 15.47a.75.75 0 1 0-1.06 1.06l5.656 5.657a.75.75 0 0 0 1.061-1.06Z" />
  </Svg>
);
export default MagnificationSolid;
