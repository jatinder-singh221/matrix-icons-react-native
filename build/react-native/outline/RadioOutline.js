import * as React from "react";
import Svg, { Path } from "react-native-svg";
const RadioOutline = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.24 7.76a5.999 5.999 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </Svg>
);
export default RadioOutline;
