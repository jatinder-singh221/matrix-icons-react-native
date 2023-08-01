import * as React from "react";
import Svg, { Path } from "react-native-svg";
const FigmaOutline = (props) => (
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
      d="M12 2H8.5a3.5 3.5 0 1 0 0 7M12 2v7m0-7h3.5a3.5 3.5 0 1 1 0 7M12 9H8.5M12 9h3.5M12 9v7M8.5 9a3.5 3.5 0 0 0 0 7m7-7a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-7 7a3.5 3.5 0 1 0 3.5 3.5V16m-3.5 0H12"
    />
  </Svg>
);
export default FigmaOutline;
