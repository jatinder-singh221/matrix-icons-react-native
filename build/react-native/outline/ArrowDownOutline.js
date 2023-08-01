import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowDownOutline = (props) => (
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
      d="M11.535 3v18m0 0L19 13.147M11.535 21 4 13.147"
    />
  </Svg>
);
export default ArrowDownOutline;
