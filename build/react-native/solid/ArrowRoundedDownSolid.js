import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowRoundedDownSolid = (props) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm.442-5.391 3.977-3.978a.625.625 0 1 0-.883-.884l-2.911 2.91V7.834a.625.625 0 0 0-1.25 0v6.825l-2.91-2.91a.625.625 0 1 0-.884.883l3.977 3.978c.244.244.64.244.884 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ArrowRoundedDownSolid;
