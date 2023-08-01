import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArchiveArrowUpSolid = (props) => (
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
      d="M20 10v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Zm-8.629 8a.75.75 0 0 0 1.5 0v-4.19l.72.72a.75.75 0 0 0 1.06-1.06l-2-2a.75.75 0 0 0-1.044-.016l-2.121 2a.75.75 0 0 0 1.028 1.092l.857-.808V18Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ArchiveArrowUpSolid;
