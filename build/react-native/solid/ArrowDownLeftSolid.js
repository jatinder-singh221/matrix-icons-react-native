import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const ArrowDownLeftSolid = (props) => (
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
        d="M17.889 5.661 5.16 18.39m0 0 10.831-.275M5.16 18.39l.225-10.881"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ArrowDownLeftSolid;
