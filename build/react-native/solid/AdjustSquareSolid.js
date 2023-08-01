import * as React from "react";
import Svg, { Path } from "react-native-svg";
const AdjustSquareSolid = (props) => (
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
      strokeDasharray="1 2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 12h20"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M4.344 8.182 6 2l15.455 4.141-.828 3.091m-1.76 6.568-1.553 5.796-15.455-4.141.776-2.898"
    />
  </Svg>
);
export default AdjustSquareSolid;
