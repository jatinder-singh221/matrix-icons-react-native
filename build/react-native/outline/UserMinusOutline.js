import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const UserMinusOutline = (props) => (
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
        d="M17.762 11.278H23m-5.578-5.606c0 2.58-2.58 4.672-5.762 4.672-3.182 0-5.762-2.092-5.762-4.672C5.898 3.092 8.478 1 11.66 1c3.182 0 5.762 2.092 5.762 4.672ZM1 18.328c0-2.58 2.58-4.672 5.762-4.672h9.428c3.183 0 5.762 2.092 5.762 4.672 0 2.58-2.58 4.672-5.762 4.672H6.762C3.58 23 1 20.908 1 18.328Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default UserMinusOutline;
