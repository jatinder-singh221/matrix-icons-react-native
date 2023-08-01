import * as React from "react";
import Svg, { Path } from "react-native-svg";
const RadioSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M5.46 5.46A.75.75 0 1 0 4.4 4.4a10.75 10.75 0 0 0 0 15.2.75.75 0 0 0 1.06-1.06 9.25 9.25 0 0 1 0-13.08ZM19.6 4.4a.75.75 0 1 0-1.06 1.06 9.25 9.25 0 0 1 0 13.08.75.75 0 0 0 1.06 1.06 10.75 10.75 0 0 0 0-15.2Z" />
    <Path d="M8.29 8.28a.75.75 0 0 0-1.06-1.06 6.75 6.75 0 0 0 0 9.55.75.75 0 0 0 1.06-1.06 5.25 5.25 0 0 1 0-7.43Zm8.48-1.05a.75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 1 0 7.43.75.75 0 0 0 1.06 1.06 6.75 6.75 0 0 0 0-9.55ZM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </Svg>
);
export default RadioSolid;
