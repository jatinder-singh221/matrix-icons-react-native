import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ChatOutline = (props) => (
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
      d="m14.486 10-2.195 3.276-1.645-1.81L9 14.138"
    />
    <Path
      stroke="currentColor"
      strokeWidth={1.5}
      d="m20.366 15.951.678.321-.678-.32a2.12 2.12 0 0 0-.168 1.34l.476 2.267a.527.527 0 0 1-.649.618l-1.71-.449a2.122 2.122 0 0 0-1.616.241A9.204 9.204 0 0 1 12 21.25 9.25 9.25 0 1 1 21.25 12a9.21 9.21 0 0 1-.884 3.951Z"
    />
  </Svg>
);
export default ChatOutline;
