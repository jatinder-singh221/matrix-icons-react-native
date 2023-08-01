import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowRoundedLeftSolid = (props) => (
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
      d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12Zm5.391.442 3.978 3.977a.625.625 0 1 0 .884-.883l-2.91-2.911h6.824a.625.625 0 0 0 0-1.25H9.342l2.91-2.91a.625.625 0 1 0-.883-.884L7.39 11.558a.625.625 0 0 0 0 .884Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ArrowRoundedLeftSolid;
