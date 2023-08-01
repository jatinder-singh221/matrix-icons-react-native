import * as React from "react";
import Svg, { Path } from "react-native-svg";
const AdjustHorizontalSolid = (props) => (
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
      d="M21 19.273h-7m-4 0H3M21 12h-9m-4 0H3m18-7.273h-5m-4 0H3M14 22v-5.454m-6-1.819V9.273m8-1.818V2"
    />
  </Svg>
);
export default AdjustHorizontalSolid;
