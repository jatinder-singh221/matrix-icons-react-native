import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BreifcaseOutline = (props) => (
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
      d="M5.25 7.25v-4.5A.75.75 0 0 1 6 2h12a.75.75 0 0 1 .75.75v4.5m-13.5 0H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1h-2.25m-13.5 0h13.5"
    />
  </Svg>
);
export default BreifcaseOutline;
