import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HeadPieceOutline = (props) => (
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
      strokeWidth={1.5}
      d="M7.111 6.275V7.7M1 21V8.982m0 0V6.75C1 4.127 3.027 2 5.527 2s4.526 2.127 4.526 4.75-2.026 4.75-4.526 4.75a4.37 4.37 0 0 1-2.716-.95L1 8.982Zm15.889-2.707V7.7M23 21V8.982m0 0V6.75C23 4.127 20.973 2 18.473 2s-4.526 2.127-4.526 4.75 2.026 4.75 4.526 4.75a4.37 4.37 0 0 0 2.716-.95L23 8.982Z"
    />
  </Svg>
);
export default HeadPieceOutline;
