import * as React from "react";
import Svg, { Path } from "react-native-svg";
const FolderSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M10 3.304C10 2.584 9.416 2 8.696 2H4.609A2.609 2.609 0 0 0 2 4.609V19a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7.609a3 3 0 0 0-3-3h-7.696c-.72 0-1.304-.584-1.304-1.305Z" />
  </Svg>
);
export default FolderSolid;
