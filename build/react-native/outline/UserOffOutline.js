import * as React from "react";
import Svg, { Path } from "react-native-svg";
const UserOffOutline = (props) => (
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
      d="M6.552 3.5c.942-.922 2.3-1.5 3.81-1.5 2.843 0 5.149 2.052 5.149 4.583 0 1.66-.99 3.112-2.474 3.917m-2.675 2.333H6.149C3.305 12.833 1 14.885 1 17.417 1 19.948 3.305 22 6.149 22h8.425c1.476 0 2.806-.552 3.745-1.438M1 2l22 20"
    />
  </Svg>
);
export default UserOffOutline;
