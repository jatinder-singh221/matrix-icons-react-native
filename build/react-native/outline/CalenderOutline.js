import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CalenderOutline = (props) => (
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
      d="M22 8.021H2m20 0v12.17C22 21.744 20.657 23 19 23H5c-1.657 0-3-1.257-3-2.808V8.022m20 0v-.937c0-1.551-1.343-2.808-3-2.808h-1.5V1.468C17.5 1.21 17.276 1 17 1s-.5.21-.5.468v2.809H7V1.468C7 1.21 6.776 1 6.5 1s-.5.21-.5.468v2.809H5c-1.657 0-3 1.257-3 2.808v.936"
    />
  </Svg>
);
export default CalenderOutline;
