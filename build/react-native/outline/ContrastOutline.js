import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ContrastOutline = (props) => (
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
      d="M4.929 19.071A10 10 0 1 0 19.072 4.928 10 10 0 0 0 4.929 19.07Zm.707-.707A9 9 0 0 0 11 20.944V3.056a9 9 0 0 0-5.364 15.308Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ContrastOutline;
