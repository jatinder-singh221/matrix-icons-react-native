import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HandRightOutline = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.253 3.154c0-.637-.565-1.154-1.262-1.154-.697 0-1.262.517-1.262 1.154v8.425a.42.42 0 1 1-.841 0V6.231c0-.637-.565-1.154-1.262-1.154-.696 0-1.261.517-1.261 1.154v5.348a.42.42 0 1 1-.841 0V7.77c0-.637-.565-1.154-1.262-1.154C3.565 6.615 3 7.132 3 7.77v8.846C3 19.59 5.636 22 8.888 22h.841c2.29 0 4.274-1.195 5.248-2.94l5.717-6.231c.448-.488.403-1.328-.13-1.738-.534-.41-1.551-.488-2 0l-2.947 2.804V5.462c0-.638-.565-1.154-1.261-1.154-.697 0-1.262.516-1.262 1.154v6.117a.42.42 0 1 1-.841 0V3.154Z"
    />
  </Svg>
);
export default HandRightOutline;
