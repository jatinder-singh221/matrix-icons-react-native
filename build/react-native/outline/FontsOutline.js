import * as React from "react";
import Svg, { Path } from "react-native-svg";
const FontsOutline = (props) => (
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
      d="M2 22 12 2l10 20M2 13.5h20"
    />
  </Svg>
);
export default FontsOutline;
