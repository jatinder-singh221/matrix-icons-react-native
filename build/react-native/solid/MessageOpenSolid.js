import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MessageOpenSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M2.022 8.393A1 1 0 0 0 2 8.6v12.223a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8.57a.996.996 0 0 0-.017-.181L12 13.382l-9.978-4.99Z" />
    <Path d="M2.702 7.615 12 12.264l9.336-4.668-8.315-5.433a1 1 0 0 0-1.056-.024L2.702 7.615Z" />
  </Svg>
);
export default MessageOpenSolid;
