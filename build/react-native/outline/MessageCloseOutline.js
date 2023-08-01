import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MessageCloseOutline = (props) => (
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
      d="M11.6 13.021a.75.75 0 0 0 .8 0l8.85-5.589V19a.25.25 0 0 1-.25.25H3a.25.25 0 0 1-.25-.25V7.432l8.85 5.59ZM5.705 5.75h12.59L12 9.726 5.705 5.75Z"
    />
  </Svg>
);
export default MessageCloseOutline;
