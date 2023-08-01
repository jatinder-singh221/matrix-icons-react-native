import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CameraSolid = (props) => (
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
      d="M14.333 2C15.253 2 16 2.746 16 3.667c0 .92.746 1.666 1.667 1.666H19a3 3 0 0 1 3 3V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8.333a3 3 0 0 1 3-3h1.333C7.253 5.333 8 4.587 8 3.667 8 2.747 8.746 2 9.667 2h4.666ZM12 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default CameraSolid;
