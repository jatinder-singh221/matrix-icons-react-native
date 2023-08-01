import * as React from "react";
import Svg, { Path } from "react-native-svg";
const DocumentMinusOutline = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 14h6M13.757 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.243a3 3 0 0 0-.879-2.122L15.88 2.88A3 3 0 0 0 13.757 2Z"
    />
  </Svg>
);
export default DocumentMinusOutline;
