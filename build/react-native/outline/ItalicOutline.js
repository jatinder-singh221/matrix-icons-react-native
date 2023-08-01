import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ItalicOutline = (props) => (
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
      d="M19 4h-9m4 16H5M15 4 9 20"
    />
  </Svg>
);
export default ItalicOutline;
