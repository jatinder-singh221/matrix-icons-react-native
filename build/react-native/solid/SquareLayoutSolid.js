import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SquareLayoutSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M2 3a1 1 0 0 1 1-1h7v20H3a1 1 0 0 1-1-1V3Zm9-1h10a1 1 0 0 1 1 1v10H11V2Zm11 12H11v8h10a1 1 0 0 0 1-1v-7Z" />
  </Svg>
);
export default SquareLayoutSolid;
