import * as React from "react";
import Svg, { Path } from "react-native-svg";
const GaleryListSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M2 4a2 2 0 1 1 4 0v16a2 2 0 1 1-4 0V4Z" />
    <Path d="M2 4a2 2 0 1 1 4 0v16a2 2 0 1 1-4 0V4Zm7 1a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3V5Z" />
    <Path d="M9 5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3V5Zm3 6a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3h-7Z" />
    <Path d="M12 11a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3h-7Z" />
  </Svg>
);
export default GaleryListSolid;
