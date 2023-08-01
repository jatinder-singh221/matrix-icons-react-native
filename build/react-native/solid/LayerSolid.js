import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const LayerSolid = (props) => (
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
        strokeLinejoin="round"
        strokeWidth={3}
        d="m2 9.391 9.524 3.913L22 9.391M2 13.74l9.524 3.913L22 13.74m0 4.348L11.524 22 2 18.087M2 5.478 11.524 2 22 5.478 11.524 8.957 2 5.478Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default LayerSolid;
