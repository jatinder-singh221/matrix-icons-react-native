import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ClipboardSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M3 6.818a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3V19a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6.818Z" />
    <Path d="M7.5 3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v2.636h-9V3Z" />
  </Svg>
);
export default ClipboardSolid;
