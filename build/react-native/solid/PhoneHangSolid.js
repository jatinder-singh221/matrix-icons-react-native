import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const PhoneHangSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        d="M22.637 10.182a2.571 2.571 0 0 1 0 3.636l-.831.832a1.608 1.608 0 0 1-1.963.242l-3.35-2.011a1.607 1.607 0 0 1-.765-1.606l.196-1.371c.02-.144-.052-.25-.137-.29a9.673 9.673 0 0 0-8.118 0c-.086.04-.157.146-.137.29l.196 1.371a1.607 1.607 0 0 1-.765 1.606l-3.35 2.01a1.608 1.608 0 0 1-1.964-.242l-.83-.83a2.572 2.572 0 0 1 0-3.637l1.363-1.364c5.272-5.272 13.82-5.272 19.092 0l1.363 1.364Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default PhoneHangSolid;
