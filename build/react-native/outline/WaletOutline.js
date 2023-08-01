import * as React from "react";
import Svg, { Path } from "react-native-svg";
const WaletOutline = (props) => (
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
      d="M19.75 6.727a.557.557 0 0 1-.006.08C21.041 7.086 22 8.084 22 9.272v10.181C22 20.86 20.657 22 19 22H5c-1.657 0-3-1.14-3-2.546V9.274c0-1.113.841-2.059 2.014-2.405L18.683 1.06a.867.867 0 0 1 .72.04c.216.116.347.319.347.536v5.091Zm0 0H4.37m13.13 9.334c.828 0 1.5-.57 1.5-1.273s-.672-1.273-1.5-1.273-1.5.57-1.5 1.273.672 1.273 1.5 1.273Z"
    />
  </Svg>
);
export default WaletOutline;
