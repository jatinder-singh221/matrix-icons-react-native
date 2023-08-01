import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MessageOpenOutline = (props) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.61 2.79 7.222 4.72L12 11.424 4.269 7.56l8.077-4.775a.25.25 0 0 1 .264.006Zm8.64 6.805v11.228a.25.25 0 0 1-.25.25H3a.25.25 0 0 1-.25-.25V9.595l8.915 4.458a.75.75 0 0 0 .67 0l8.915-4.458Z"
    />
  </Svg>
);
export default MessageOpenOutline;
