import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CommentOffOutline = (props) => (
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
      d="m18.835 20.929-1.71-.438a1.403 1.403 0 0 0-1.044.158A10.143 10.143 0 0 1 11 22c-5.523 0-10-4.368-10-9.756 0-2.66 1.09-5.07 2.859-6.83m16.185 10.998A9.521 9.521 0 0 0 21 12.244c0-5.388-4.477-9.756-10-9.756-1.66 0-2.622.277-4 .975M2.5 2 22 21.512"
    />
  </Svg>
);
export default CommentOffOutline;
