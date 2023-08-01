import * as React from "react";
import Svg, { Path } from "react-native-svg";
const AdjustVerticleSolid = (props) => (
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
      d="M4.727 21v-7m0-4V3M12 21v-9m0-4V3m7.273 18v-5m0-4V3M2 14h5.455m1.818-6h5.454m1.819 8H22"
    />
  </Svg>
);
export default AdjustVerticleSolid;
