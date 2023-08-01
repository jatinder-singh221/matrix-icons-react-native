import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ImageTagOutline = (props) => (
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
      d="m11.719 13-.433.75a1 1 0 0 0 .866 1.5h.535M11.719 13l2.165-3.75a1 1 0 0 1 1.732 0l2.598 4.5a1 1 0 0 1-.866 1.5h-4.661M11.719 13a1.99 1.99 0 0 0-.969-.25h-3a2 2 0 1 0 0 4h3a2 2 0 0 0 1.937-1.5M7 22h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5Zm3.75-12.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
    />
  </Svg>
);
export default ImageTagOutline;
