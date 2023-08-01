import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowCycleSquareOutline = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.609 10.2V5.7c0-1.491 1.168-2.7 2.608-2.7h9.276c1.44 0 2.608 1.209 2.608 2.7v4.5m0 0-2.898-2.16M19.1 10.2 22 8.04m-2.609 5.76v4.5c0 1.491-1.168 2.7-2.608 2.7H7.507C6.067 21 4.9 19.791 4.9 18.3v-4.5m0 0 2.898 2.16M4.9 13.8 2 15.96"
    />
  </Svg>
);
export default ArrowCycleSquareOutline;
