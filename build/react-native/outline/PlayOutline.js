import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PlayOutline = (props) => (
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
      strokeWidth={1.5}
      d="m6.918 4.667 11.54 6.348a1.125 1.125 0 0 1 0 1.97l-11.54 6.349a1.125 1.125 0 0 1-1.667-.986L5.25 5.653c0-.855.917-1.398 1.668-.986Z"
    />
  </Svg>
);
export default PlayOutline;
