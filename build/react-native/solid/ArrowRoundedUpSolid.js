import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowRoundedUpSolid = (props) => (
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
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm-.442 5.391L7.581 11.37a.625.625 0 0 0 .883.884l2.911-2.91v6.824a.625.625 0 0 0 1.25 0V9.342l2.91 2.91a.625.625 0 1 0 .884-.883L12.442 7.39a.625.625 0 0 0-.884 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ArrowRoundedUpSolid;
