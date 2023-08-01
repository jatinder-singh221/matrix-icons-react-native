import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const UserAddOutline = (props) => (
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
        d="M21 8.113v3.97m-2-1.985h4m-6.5-4.55c0 2.513-2.462 4.55-5.5 4.55S5.5 8.06 5.5 5.548C5.5 3.038 7.962 1 11 1s5.5 2.037 5.5 4.549ZM1 18.452c0-2.512 2.462-4.549 5.5-4.549h9c3.038 0 5.5 2.037 5.5 4.55C21 20.962 18.538 23 15.5 23h-9C3.462 23 1 20.963 1 18.451Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default UserAddOutline;
