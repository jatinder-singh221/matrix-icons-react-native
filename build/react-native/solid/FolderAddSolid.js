import * as React from "react";
import Svg, { Path } from "react-native-svg";
const FolderAddSolid = (props) => (
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
      d="M8.696 2C9.416 2 10 2.584 10 3.304c0 .72.584 1.305 1.304 1.305H19a3 3 0 0 1 3 3V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4.609A2.609 2.609 0 0 1 4.609 2h4.087Zm4.054 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 1 0 0 1.5h2.25V17a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V11Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default FolderAddSolid;
