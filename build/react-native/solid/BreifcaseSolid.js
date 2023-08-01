import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BreifcaseSolid = (props) => (
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
      d="M6 2a.75.75 0 0 0-.75.75v4.5H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1h-2.25v-4.5A.75.75 0 0 0 18 2H6Zm11.25 5.25V3.5H6.75v3.75h10.5Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default BreifcaseSolid;
