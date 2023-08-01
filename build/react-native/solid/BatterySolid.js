import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BatterySolid = (props) => (
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
      strokeWidth={3}
      d="M22 14v-3M3.86 6h13.024c1.027 0 1.86.895 1.86 2v8c0 1.105-.833 2-1.86 2H3.86C2.833 18 2 17.105 2 16V8c0-1.105.833-2 1.86-2Z"
    />
  </Svg>
);
export default BatterySolid;
