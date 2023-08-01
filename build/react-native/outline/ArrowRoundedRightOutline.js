import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowRoundedRightOutline = (props) => (
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
      d="M12.833 15.333 16.167 12m0 0-3.334-3.333M16.167 12H7.833M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Z"
    />
  </Svg>
);
export default ArrowRoundedRightOutline;
