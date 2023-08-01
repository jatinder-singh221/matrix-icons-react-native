import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BoldOutline = (props) => (
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
      d="M6 12h8a4 4 0 1 0 0-8H6v8Zm0 0h9a4 4 0 1 1 0 8H6v-8Z"
    />
  </Svg>
);
export default BoldOutline;
