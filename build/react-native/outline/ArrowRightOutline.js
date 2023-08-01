import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowRightOutline = (props) => (
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
      d="M2.5 11.965h18m0 0L12.647 4.5m7.853 7.465L12.647 19.5"
    />
  </Svg>
);
export default ArrowRightOutline;
