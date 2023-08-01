import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HomeSolid = (props) => (
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
      d="M6.067 4.029A7 7 0 0 0 2 10.385v3.905a7 7 0 0 0 7 7h6a7 7 0 0 0 7-7v-3.905a7 7 0 0 0-4.067-6.356l-3-1.385a7 7 0 0 0-5.866 0l-3 1.385Zm6.683 9.261a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0v-5Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default HomeSolid;
