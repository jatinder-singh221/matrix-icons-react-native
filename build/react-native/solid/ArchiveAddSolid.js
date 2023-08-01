import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArchiveAddSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z" />
    <Path
      fillRule="evenodd"
      d="M20 18v-8a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3ZM8.25 15a.75.75 0 0 1 .75-.75h2.25V12a.75.75 0 0 1 1.5 0v2.25H15a.75.75 0 0 1 0 1.5h-2.25V18a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ArchiveAddSolid;
