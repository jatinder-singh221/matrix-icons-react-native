import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BatteryOutline = (props) => (
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
      d="M22 14v-3M3.958 6h13.71c1.08 0 1.957.895 1.957 2v8c0 1.105-.876 2-1.958 2H3.958C2.877 18 2 17.105 2 16V8c0-1.105.877-2 1.958-2Z"
    />
  </Svg>
);
export default BatteryOutline;
