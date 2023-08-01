import * as React from "react";
import Svg, { Path } from "react-native-svg";
const DocumentMinusSolid = (props) => (
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
      d="M7 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.243a3 3 0 0 0-.879-2.122L15.88 2.88A3 3 0 0 0 13.757 2H7Zm2 11.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default DocumentMinusSolid;
