import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowLeftOutline = (props) => (
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
      d="M20.5 12.035h-18m0 0 7.853 7.465M2.5 12.035 10.353 4.5"
    />
  </Svg>
);
export default ArrowLeftOutline;
