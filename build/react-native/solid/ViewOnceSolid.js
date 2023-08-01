import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ViewOnceSolid = (props) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm.75-14a.75.75 0 0 0-1.166-.624l-3 2a.75.75 0 1 0 .832 1.248l1.834-1.223V17a.75.75 0 1 0 1.5 0V8Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ViewOnceSolid;
