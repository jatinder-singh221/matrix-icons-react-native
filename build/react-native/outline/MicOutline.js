import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MicOutline = (props) => (
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
      d="M5 11.5V13c0 1.66.59 3.263 1.655 4.5 1.066 1.238 3.256 2.315 4.845 2.5m0 0v3m0-3c1.589-.185 3.779-1.262 4.845-2.5A6.9 6.9 0 0 0 18 13v-1.5M7.889 23H11.5m3.611 0H11.5M7.889 4.75c0-.995.38-1.948 1.058-2.652A3.545 3.545 0 0 1 11.5 1c.958 0 1.876.395 2.553 1.098a3.824 3.824 0 0 1 1.058 2.652V13c0 .995-.38 1.948-1.058 2.652A3.545 3.545 0 0 1 11.5 16.75a3.545 3.545 0 0 1-2.553-1.098A3.825 3.825 0 0 1 7.889 13V4.75Z"
    />
  </Svg>
);
export default MicOutline;
