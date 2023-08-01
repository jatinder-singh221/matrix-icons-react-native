import * as React from "react";
import Svg, { Path } from "react-native-svg";
const GaleryListOutline = (props) => (
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
      d="M2.75 4a1.25 1.25 0 1 1 2.5 0v16a1.25 1.25 0 1 1-2.5 0V4Zm7 1A2.25 2.25 0 0 1 12 2.75h7A2.25 2.25 0 0 1 21.25 5v1A2.25 2.25 0 0 1 19 8.25h-7A2.25 2.25 0 0 1 9.75 6V5Zm0 9A2.25 2.25 0 0 1 12 11.75h7A2.25 2.25 0 0 1 21.25 14v5A2.25 2.25 0 0 1 19 21.25h-7A2.25 2.25 0 0 1 9.75 19v-5Z"
    />
  </Svg>
);
export default GaleryListOutline;
