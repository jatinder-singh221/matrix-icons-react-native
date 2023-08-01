import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
const CartOutline = (props) => (
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
      d="M14.5 4.5h8l-3 10.5h-10l-3-13H2"
    />
    <Circle
      cx={10.5}
      cy={19.5}
      r={1.5}
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <Circle
      cx={18.5}
      cy={19.5}
      r={1.5}
      stroke="currentColor"
      strokeWidth={1.5}
    />
  </Svg>
);
export default CartOutline;
