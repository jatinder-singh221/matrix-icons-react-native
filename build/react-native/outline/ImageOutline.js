import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ImageOutline = (props) => (
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
      d="M8.25 2A6.25 6.25 0 0 0 2 8.25v7.5A6.25 6.25 0 0 0 8.25 22h7.5A6.25 6.25 0 0 0 22 15.75v-7.5A6.25 6.25 0 0 0 15.75 2h-7.5Zm3.937 6.458a1.25 1.25 0 0 1 2.165 0l3.608 6.25a1.25 1.25 0 0 1-1.082 1.875H7.002a1.25 1.25 0 0 1-1.083-1.875l1.805-3.125a1.25 1.25 0 0 1 2.165 0c.11.19.384.19.493 0l1.805-3.125Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ImageOutline;
