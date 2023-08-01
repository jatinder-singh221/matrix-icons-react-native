import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ClouldSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M21.75 15a4.5 4.5 0 0 1-4.5 4.5H6a3.75 3.75 0 0 1-1.332-7.257 3 3 0 0 1 3.758-3.848 5.25 5.25 0 0 1 10.233 2.33A4.502 4.502 0 0 1 21.75 15Z" />
  </Svg>
);
export default ClouldSolid;
