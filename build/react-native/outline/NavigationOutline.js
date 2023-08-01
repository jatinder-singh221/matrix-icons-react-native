import * as React from "react";
import Svg, { Path } from "react-native-svg";
const NavigationOutline = (props) => (
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
      d="m3 11 19-9-9 19-2-8-8-2Z"
    />
  </Svg>
);
export default NavigationOutline;
