import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SheildOutline = (props) => (
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
      strokeWidth={1.5}
      d="M2.75 7.096a.42.42 0 0 1 .236-.38l8.08-3.76a2.21 2.21 0 0 1 1.868.001l8.08 3.76c.14.065.236.21.236.38V10.2c0 5.502-3.933 10.169-9.25 11.04-5.317-.871-9.25-5.538-9.25-11.04V7.096Z"
    />
  </Svg>
);
export default SheildOutline;
