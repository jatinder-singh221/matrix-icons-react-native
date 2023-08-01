import * as React from "react";
import Svg, { Path } from "react-native-svg";
const FolderOutline = (props) => (
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
      strokeWidth={1.5}
      d="M4.609 2.75h4.087c.306 0 .554.248.554.554 0 1.135.92 2.055 2.054 2.055H19a2.25 2.25 0 0 1 2.25 2.25V19A2.25 2.25 0 0 1 19 21.25H5A2.25 2.25 0 0 1 2.75 19V4.609c0-1.027.832-1.859 1.859-1.859Z"
    />
  </Svg>
);
export default FolderOutline;
