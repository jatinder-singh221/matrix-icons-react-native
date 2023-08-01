import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ThunderSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M3 13.539 14.454 2 12 10.461h9L9.545 22 12 13.539H3Z" />
  </Svg>
);
export default ThunderSolid;
