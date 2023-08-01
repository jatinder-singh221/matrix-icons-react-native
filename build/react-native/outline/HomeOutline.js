import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HomeOutline = (props) => (
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
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 13v5.5M2 10.385a7 7 0 0 1 4.067-6.356l3-1.385a7 7 0 0 1 5.866 0l3 1.385A7 7 0 0 1 22 10.385v3.905a7 7 0 0 1-7 7H9a7 7 0 0 1-7-7v-3.905Z"
    />
  </Svg>
);
export default HomeOutline;
