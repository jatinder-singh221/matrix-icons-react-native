import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const WindowOutline = (props) => (
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
        strokeWidth={1.4}
        d="M5 1.3A3.7 3.7 0 0 0 1.3 5v14A3.7 3.7 0 0 0 5 22.7h14a3.7 3.7 0 0 0 3.7-3.7V5A3.7 3.7 0 0 0 19 1.3H5ZM6.3 6a.3.3 0 1 1-.6 0 .3.3 0 0 1 .6 0Zm3 0a.3.3 0 1 1-.6 0 .3.3 0 0 1 .6 0Zm3 0a.3.3 0 1 1-.6 0 .3.3 0 0 1 .6 0Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default WindowOutline;
