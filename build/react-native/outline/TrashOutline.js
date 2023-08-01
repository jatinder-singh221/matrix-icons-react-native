import * as React from "react";
import Svg, { Path } from "react-native-svg";
const TrashOutline = (props) => (
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
      d="M16.5 5.205v-.227c0-1.564-1.212-2.9-2.815-2.951a52.663 52.663 0 0 0-3.369 0C8.713 2.077 7.5 3.414 7.5 4.977v.228m9 0c1.299.119 2.593.29 3.878.512a.75.75 0 0 1-.256 1.478l-.209-.035-1.005 13.07A3 3 0 0 1 15.917 23H8.084a3 3 0 0 1-2.991-2.77L4.087 7.16l-.209.035a.75.75 0 1 1-.256-1.478A48.564 48.564 0 0 1 7.5 5.205m9 0c-1.998-.121-7.002-.121-9 0"
    />
  </Svg>
);
export default TrashOutline;
