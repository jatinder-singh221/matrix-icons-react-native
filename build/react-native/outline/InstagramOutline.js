import * as React from "react";
import Svg, { Path } from "react-native-svg";
const InstagramOutline = (props) => (
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
      d="M17.5 6.5h.01M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm9 9.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37Z"
    />
  </Svg>
);
export default InstagramOutline;
