import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowUDownOutline = (props) => (
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
      d="M3 15.79V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3.21m-4.5-4.29L12 15.79m0 0-4.5-4.264M12 15.79V3"
    />
  </Svg>
);
export default ArrowUDownOutline;
