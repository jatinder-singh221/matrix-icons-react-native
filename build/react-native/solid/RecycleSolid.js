import * as React from "react";
import Svg, { Path } from "react-native-svg";
const RecycleSolid = (props) => (
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
      strokeWidth={3}
      d="m5.333 15.333-2.61 5.22A1 1 0 0 0 3.619 22H7m8.333-13.333-2.439-4.878a1 1 0 0 0-1.788 0l-2.44 4.878m10 6.666L20 18l1.276 2.553A1 1 0 0 1 20.382 22H17"
    />
  </Svg>
);
export default RecycleSolid;
