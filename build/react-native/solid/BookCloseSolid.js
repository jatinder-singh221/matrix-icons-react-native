import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BookCloseSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M20 2H6.5A2.5 2.5 0 0 0 4 4.5v12.923a3.25 3.25 0 0 1 2.5-1.173H20V2Zm0 15.75H6.5a1.75 1.75 0 0 0-1.75 1.75.75.75 0 0 1-.637.742A2.5 2.5 0 0 0 6.5 22H20v-4.25Z" />
  </Svg>
);
export default BookCloseSolid;
