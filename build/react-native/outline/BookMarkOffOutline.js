import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BookMarkOffOutline = (props) => (
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
      d="M7 3.126a48.507 48.507 0 0 1 9.093.198C17.193 3.452 18 4.4 18 5.509V13M3 6v15.002l7-5 8 5V19.5M2 2l19.5 17.5"
    />
  </Svg>
);
export default BookMarkOffOutline;
