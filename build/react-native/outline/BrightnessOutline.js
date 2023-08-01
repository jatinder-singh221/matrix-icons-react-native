import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BrightnessOutline = (props) => (
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
      d="M12 6.5V2.536m-.002 15.348v3.963M21.5 12h-3.557M2.581 12h3.557m1.377-4.163L5 5.5m11.985 11.634 2.515 2.335M5 18.836 7.515 16.5M19.5 5.807l-2.515 2.336m-4.987 7.159c1.965 0 3.558-1.479 3.558-3.303 0-1.825-1.593-3.303-3.558-3.303-1.964 0-3.557 1.479-3.557 3.303 0 1.824 1.593 3.303 3.557 3.303Z"
    />
  </Svg>
);
export default BrightnessOutline;
