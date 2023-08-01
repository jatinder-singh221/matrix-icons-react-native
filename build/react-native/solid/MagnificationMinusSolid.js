import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MagnificationMinusSolid = (props) => (
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
      d="M16 9A7 7 0 1 1 2 9a7 7 0 0 1 14 0Zm-9.5-.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z"
      clipRule="evenodd"
    />
    <Path d="m16.53 15.47 5.657 5.656a.75.75 0 0 1-1.06 1.061L15.47 16.53a.75.75 0 1 1 1.06-1.06Z" />
  </Svg>
);
export default MagnificationMinusSolid;
