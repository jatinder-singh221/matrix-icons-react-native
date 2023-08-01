import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const CropSolid = (props) => (
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
        d="M6.13 1 6 16a2 2 0 0 0 2 2h15M1 6.13 16 6a2 2 0 0 1 2 2v15"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default CropSolid;
