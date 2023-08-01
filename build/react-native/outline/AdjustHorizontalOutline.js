import * as React from "react";
import Svg, { Path } from "react-native-svg";
const AdjustHorizontalOutline = (props) => (
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
      d="M21 20h-7m-4 0H3m18-8h-9m-4 0H3m18-8h-5m-4 0H3m11 19v-6m-6-2V9m8-2V1"
    />
  </Svg>
);
export default AdjustHorizontalOutline;
