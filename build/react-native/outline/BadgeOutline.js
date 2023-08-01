import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const BadgeOutline = (props) => (
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
        d="m9 13 3.23 2L15 9M8.248 20.39a4 4 0 0 1-5.028-4.807 4 4 0 0 1-.25-7.03 4.001 4.001 0 0 1 5.375-5.18 4 4 0 0 1 7.102-.404 4.001 4.001 0 0 1 5.18 5.376 4 4 0 0 1-.238 7.407 4 4 0 0 1-4.806 5.028 4 4 0 0 1-7.335-.39Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BadgeOutline;
