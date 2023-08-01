import * as React from "react";
import Svg, { Path } from "react-native-svg";
const GridSquareAddOutline = (props) => (
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
      strokeWidth={1.5}
      d="M18 14v3m0 0v3m0-3h-3m3 0h3M4.917 10.333h2.5a2.917 2.917 0 0 0 2.916-2.916v-2.5A2.917 2.917 0 0 0 7.417 2h-2.5A2.917 2.917 0 0 0 2 4.917v2.5a2.917 2.917 0 0 0 2.917 2.916Zm11.666 0h2.5A2.917 2.917 0 0 0 22 7.417v-2.5A2.917 2.917 0 0 0 19.083 2h-2.5a2.917 2.917 0 0 0-2.916 2.917v2.5a2.917 2.917 0 0 0 2.916 2.916ZM4.917 22h2.5a2.917 2.917 0 0 0 2.916-2.917v-2.5a2.917 2.917 0 0 0-2.916-2.916h-2.5A2.917 2.917 0 0 0 2 16.583v2.5A2.917 2.917 0 0 0 4.917 22Z"
    />
  </Svg>
);
export default GridSquareAddOutline;
