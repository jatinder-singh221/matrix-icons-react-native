import * as React from "react";
import Svg, { Path } from "react-native-svg";
const DrawOutline = (props) => (
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
      d="M2 2s9.676 1.704 12 6.5c1.535 3.168-1.343 6 .5 9C16.288 20.41 22 22 22 22"
    />
  </Svg>
);
export default DrawOutline;
