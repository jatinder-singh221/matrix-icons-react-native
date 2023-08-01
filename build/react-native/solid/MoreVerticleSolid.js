import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MoreVerticleSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M11.5 18a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />
    <Path d="M11.5 18a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm0-8a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />
    <Path d="M11.5 10a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM14 4.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z" />
    <Path d="M14 4.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z" />
  </Svg>
);
export default MoreVerticleSolid;
