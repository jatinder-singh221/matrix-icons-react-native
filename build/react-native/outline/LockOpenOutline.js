import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const LockOpenOutline = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M23.25 10.5V6.75a5.25 5.25 0 1 0-10.5 0v3m0 0h-9a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3h-1.5Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default LockOpenOutline;
