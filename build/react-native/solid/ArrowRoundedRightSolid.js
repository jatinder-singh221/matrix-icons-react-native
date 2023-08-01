import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowRoundedRightSolid = (props) => (
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
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Zm-5.391-.442L12.63 7.581a.625.625 0 0 0-.884.883l2.91 2.911H7.834a.625.625 0 0 0 0 1.25h6.825l-2.91 2.91a.625.625 0 1 0 .883.884l3.978-3.977a.625.625 0 0 0 0-.884Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ArrowRoundedRightSolid;
