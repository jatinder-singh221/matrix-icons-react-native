import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowRoundedUpOutline = (props) => (
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
      d="M15.333 11.167 12 7.833m0 0-3.333 3.334M12 7.833v8.334M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Z"
    />
  </Svg>
);
export default ArrowRoundedUpOutline;
