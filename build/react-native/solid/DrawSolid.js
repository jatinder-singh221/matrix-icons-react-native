import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const DrawSolid = (props) => (
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
        strokeWidth={3}
        d="M2 2s9.676 1.704 12 6.5c1.535 3.168-1.343 6 .5 9C16.288 20.41 22 22 22 22"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default DrawSolid;
