import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MinusOutline = (props) => (
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
      d="M19 12H4"
    />
  </Svg>
);
export default MinusOutline;
