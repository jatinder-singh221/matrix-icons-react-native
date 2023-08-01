import * as React from "react";
import Svg, { Path } from "react-native-svg";
const DocumentSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M4 5a3 3 0 0 1 3-3h6.757a3 3 0 0 1 2.122.879L18 5l1.121 1.121A3 3 0 0 1 20 8.243V19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5Z" />
  </Svg>
);
export default DocumentSolid;
