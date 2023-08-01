import * as React from "react";
import Svg, { Path } from "react-native-svg";
const RecycleBinOutline = (props) => (
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
      d="m9.614 8.998.772-1.545c.645-1.29 2.486-1.29 3.13 0l.773 1.545m1.666 3.333.943 1.886a1.75 1.75 0 0 1-1.565 2.533h-.882m-6.504-4.419-.943 1.886A1.75 1.75 0 0 0 8.57 16.75h.882M4.001 2.048A1 1 0 0 1 5 1h13.902a1 1 0 0 1 1 1.048l-.815 17.095A3 3 0 0 1 16.091 22H7.81a3 3 0 0 1-2.996-2.857L4.001 2.048Z"
    />
  </Svg>
);
export default RecycleBinOutline;
