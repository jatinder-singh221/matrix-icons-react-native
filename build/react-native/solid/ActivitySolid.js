import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ActivitySolid = (props) => (
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
      d="M22 12h-4l-3 9L9 3l-3 9H2"
    />
  </Svg>
);
export default ActivitySolid;
