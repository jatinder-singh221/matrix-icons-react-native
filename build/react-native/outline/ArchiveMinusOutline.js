import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArchiveMinusOutline = (props) => (
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
      strokeWidth={1.5}
      d="M4 8h16M4 8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1M4 8v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8M9 13h6"
    />
  </Svg>
);
export default ArchiveMinusOutline;
