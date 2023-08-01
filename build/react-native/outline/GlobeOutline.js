import * as React from "react";
import Svg, { Path } from "react-native-svg";
const GlobeOutline = (props) => (
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
      d="M22 12c0 5.523-4.477 10-10 10m10-10c0-5.523-4.477-10-10-10m10 10H2m10 10C6.477 22 2 17.523 2 12m10 10a15.3 15.3 0 0 0 4-10 15.3 15.3 0 0 0-4-10m0 20a15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10M2 12C2 6.477 6.477 2 12 2"
    />
  </Svg>
);
export default GlobeOutline;
