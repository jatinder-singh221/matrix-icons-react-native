import * as React from "react";
import Svg, { Path } from "react-native-svg";
const FireOutline = (props) => (
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
      d="M9.406 5.562a8.252 8.252 0 0 0-3.963 3.822c-.844 1.69-1.286 3.328-.88 5.173.407 1.845 1.637 3.785 3.113 4.964a8.252 8.252 0 0 0 5.202 1.803 8.25 8.25 0 0 0 5.864-13.993 8.287 8.287 0 0 1-2.944 2.572A8.983 8.983 0 0 0 12.39 3.06a8.21 8.21 0 0 1-2.983 2.501l-.001.001Z"
    />
  </Svg>
);
export default FireOutline;
