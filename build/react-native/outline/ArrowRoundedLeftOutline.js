import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowRoundedLeftOutline = (props) => (
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
      d="M11.167 8.667 7.833 12m0 0 3.334 3.333M7.833 12h8.334M12 22a10.001 10.001 0 1 1 0-20.002A10.001 10.001 0 0 1 12 22Z"
    />
  </Svg>
);
export default ArrowRoundedLeftOutline;
