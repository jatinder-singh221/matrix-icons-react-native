import * as React from "react";
import Svg, { Path } from "react-native-svg";
const DocumentOutline = (props) => (
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
      d="M17 21.25H7A2.25 2.25 0 0 1 4.75 19V5A2.25 2.25 0 0 1 7 2.75h6.757a2.25 2.25 0 0 1 1.591.659L17.47 5.53l1.121 1.122c.422.422.659.994.659 1.59V19A2.25 2.25 0 0 1 17 21.25Z"
    />
  </Svg>
);
export default DocumentOutline;
