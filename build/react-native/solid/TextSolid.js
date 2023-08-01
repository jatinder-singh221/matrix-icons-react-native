import * as React from "react";
import Svg, { Path } from "react-native-svg";
const TextSolid = (props) => (
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
      d="M4 7V4h16v3M9 20h6M12 4v16"
    />
  </Svg>
);
export default TextSolid;
