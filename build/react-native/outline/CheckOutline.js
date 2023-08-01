import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CheckOutline = (props) => (
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
      strokeWidth={1.5}
      d="M21 3 9.353 20.352a.5.5 0 0 1-.842-.018L3 11.308"
    />
  </Svg>
);
export default CheckOutline;
