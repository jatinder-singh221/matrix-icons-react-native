import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MessageCloseSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M2 6.06V19a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6.06a.751.751 0 0 1-.1.074L12 12.387 2.1 6.134A.755.755 0 0 1 2 6.06Z" />
    <Path d="M20.887 5H3.113L12 10.613 20.887 5Z" />
  </Svg>
);
export default MessageCloseSolid;
