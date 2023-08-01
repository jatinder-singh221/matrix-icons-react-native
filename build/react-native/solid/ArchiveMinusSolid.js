import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArchiveMinusSolid = (props) => (
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
      d="M5 9a1 1 0 0 0-1 1v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a1 1 0 0 0-1-1H5Zm4 3.25a.75.75 0 1 0 0 1.5h6a.75.75 0 1 0 0-1.5H9Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ArchiveMinusSolid;
