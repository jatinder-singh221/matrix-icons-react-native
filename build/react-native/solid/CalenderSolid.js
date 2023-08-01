import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CalenderSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M7 1.468C7 1.21 6.776 1 6.5 1s-.5.21-.5.468v2.809H5c-1.657 0-3 1.257-3 2.808h20c0-1.551-1.343-2.808-3-2.808h-1.5V1.468C17.5 1.21 17.276 1 17 1s-.5.21-.5.468v2.809H7V1.468Zm15 6.553H2v12.17C2 21.744 3.343 23 5 23h14c1.657 0 3-1.257 3-2.808V8.022Z" />
  </Svg>
);
export default CalenderSolid;
