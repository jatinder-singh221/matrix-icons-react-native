import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SquareLayoutOutline = (props) => (
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
      d="M11 2h10a1 1 0 0 1 1 1v10M11 2v11m0-11H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h8m11-9H11m11 0v8a1 1 0 0 1-1 1H11m0-9v9"
    />
  </Svg>
);
export default SquareLayoutOutline;
