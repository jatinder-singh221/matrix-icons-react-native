import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MoreHorizontalSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M6 12.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
    <Path d="M6 12.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm8 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
    <Path d="M14 12.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm5.5 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    <Path d="M19.5 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
  </Svg>
);
export default MoreHorizontalSolid;
