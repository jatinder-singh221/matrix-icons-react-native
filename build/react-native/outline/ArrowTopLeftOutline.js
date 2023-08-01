import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const ArrowTopLeftOutline = (props) => (
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
        strokeWidth={1.5}
        d="M17.839 18.389 5.111 5.661m0 0 .275 10.831M5.11 5.661l10.881.225"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ArrowTopLeftOutline;
