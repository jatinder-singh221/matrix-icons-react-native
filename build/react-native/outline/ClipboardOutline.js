import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ClipboardOutline = (props) => (
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
      d="M16.5 5.043V3a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v2.043M6 22h12a3 3 0 0 0 3-3V7.609a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3V19a3 3 0 0 0 3 3Z"
    />
  </Svg>
);
export default ClipboardOutline;
