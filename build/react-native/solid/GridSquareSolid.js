import * as React from "react";
import Svg, { Path } from "react-native-svg";
const GridSquareSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M2 4.917A2.917 2.917 0 0 1 4.917 2h2.5a2.917 2.917 0 0 1 2.916 2.917v2.5a2.917 2.917 0 0 1-2.916 2.916h-2.5A2.917 2.917 0 0 1 2 7.417v-2.5Zm11.667 0A2.917 2.917 0 0 1 16.583 2h2.5A2.917 2.917 0 0 1 22 4.917v2.5a2.917 2.917 0 0 1-2.917 2.916h-2.5a2.917 2.917 0 0 1-2.916-2.916v-2.5ZM2 16.583a2.917 2.917 0 0 1 2.917-2.916h2.5a2.917 2.917 0 0 1 2.916 2.916v2.5A2.917 2.917 0 0 1 7.417 22h-2.5A2.917 2.917 0 0 1 2 19.083v-2.5Zm11.667 0a2.917 2.917 0 0 1 2.916-2.916h2.5A2.917 2.917 0 0 1 22 16.583v2.5A2.917 2.917 0 0 1 19.083 22h-2.5a2.917 2.917 0 0 1-2.916-2.917v-2.5Z" />
  </Svg>
);
export default GridSquareSolid;