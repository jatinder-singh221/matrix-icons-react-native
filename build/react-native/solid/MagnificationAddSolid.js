import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MagnificationAddSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M16 9A7 7 0 1 1 2 9a7 7 0 0 1 14 0ZM9.75 6.5a.75.75 0 0 0-1.5 0v1.75H6.5a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0V9.75h1.75a.75.75 0 0 0 0-1.5H9.75V6.5Z"
      clipRule="evenodd"
    />
    <Path d="m16.53 15.47 5.657 5.656a.75.75 0 0 1-1.06 1.061L15.47 16.53a.75.75 0 1 1 1.06-1.06Z" />
  </Svg>
);
export default MagnificationAddSolid;
