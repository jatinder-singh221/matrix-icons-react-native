import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ChevronDoubleLeftSolid = (props) => (
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
      strokeWidth={3}
      d="M12.75 19.5 5.25 12l7.5-7.5m6 15-7.5-7.5 7.5-7.5"
    />
  </Svg>
);
export default ChevronDoubleLeftSolid;
