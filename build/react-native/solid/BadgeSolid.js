import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BadgeSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M4.272 19.385a4 4 0 0 0 3.976 1.004 4.002 4.002 0 0 0 7.335.39 4 4 0 0 0 4.806-5.028 4.002 4.002 0 0 0 .238-7.406 4.001 4.001 0 0 0-5.18-5.376 4 4 0 0 0-7.102.403 4.002 4.002 0 0 0-5.376 5.181 4 4 0 0 0 .25 7.03 3.998 3.998 0 0 0 1.053 3.802Zm11.409-10.07a.75.75 0 1 0-1.362-.63l-2.414 5.231-2.51-1.554a.75.75 0 0 0-.79 1.276l3.231 2a.75.75 0 0 0 1.076-.324l2.769-6Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default BadgeSolid;
