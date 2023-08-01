import * as React from "react";
import Svg, { Path } from "react-native-svg";
const GlobeSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M10.93 2A10.003 10.003 0 0 0 2 11.196h5.255A16.05 16.05 0 0 1 10.93 2ZM7.255 12.696H2a10.003 10.003 0 0 0 8.93 9.197 16.05 16.05 0 0 1-3.675-9.197Zm5.759 9.197a10.003 10.003 0 0 0 8.93-9.197H16.69a16.05 16.05 0 0 1-3.676 9.197Zm2.172-9.197a14.55 14.55 0 0 1-3.214 8.102 14.55 14.55 0 0 1-3.214-8.102h6.428Zm0-1.5H8.758a14.55 14.55 0 0 1 3.214-8.1 14.55 14.55 0 0 1 3.214 8.1Zm1.504 0h5.255A10.003 10.003 0 0 0 13.014 2a16.05 16.05 0 0 1 3.676 9.196Z" />
  </Svg>
);
export default GlobeSolid;
