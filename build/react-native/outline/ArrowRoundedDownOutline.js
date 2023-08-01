import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowRoundedDownOutline = (props) => (
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
      d="M8.667 12.833 12 16.167m0 0 3.333-3.334M12 16.167V7.833M22 12a10 10 0 1 1-20.001 0A10 10 0 0 1 22 12Z"
    />
  </Svg>
);
export default ArrowRoundedDownOutline;
