import * as React from "react";
import Svg, { Path } from "react-native-svg";
const TvSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M5 3a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h6.25v2.25H7a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5h-4.25V18H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H5Z" />
  </Svg>
);
export default TvSolid;
