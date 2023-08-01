import * as React from "react";
import Svg, { Path } from "react-native-svg";
const LockOutline = (props) => (
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
      d="M6.75 9.75v-3a5.25 5.25 0 1 1 10.5 0v3m-10.5 0a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3m-10.5 0h10.5"
    />
  </Svg>
);
export default LockOutline;
