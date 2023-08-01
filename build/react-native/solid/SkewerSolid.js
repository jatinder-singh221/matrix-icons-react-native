import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SkewerSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M6.833 2A.833.833 0 0 0 6 2.833c0 1.486.778 2.79 1.948 3.528l-.86 6.017A5.001 5.001 0 0 0 4 17a1 1 0 0 0 1 1h6.25v3.5a.75.75 0 0 0 1.5 0V18H19a1 1 0 0 0 1-1 5.001 5.001 0 0 0-3.089-4.622l-.86-6.017A4.164 4.164 0 0 0 18 2.833.833.833 0 0 0 17.167 2H6.833Z" />
  </Svg>
);
export default SkewerSolid;
