import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CameraOutline = (props) => (
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
      d="M14.333 2.75c.507 0 .917.41.917.917a2.417 2.417 0 0 0 2.417 2.416H19a2.25 2.25 0 0 1 2.25 2.25V19A2.25 2.25 0 0 1 19 21.25H5A2.25 2.25 0 0 1 2.75 19V8.333A2.25 2.25 0 0 1 5 6.083h1.333A2.417 2.417 0 0 0 8.75 3.667c0-.507.41-.917.917-.917h4.666ZM12 17.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
    />
  </Svg>
);
export default CameraOutline;
