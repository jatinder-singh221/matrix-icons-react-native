import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PlusOutline = (props) => (
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
      d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 1 1 0 1.5h-6.75v6.75a.75.75 0 1 1-1.5 0v-6.75H4.5a.75.75 0 1 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default PlusOutline;
