import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CommentSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M20.932 17.139a1.37 1.37 0 0 1 .112-.867A9.962 9.962 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a9.953 9.953 0 0 0 5.08-1.385 1.376 1.376 0 0 1 1.045-.161l1.71.448a1.277 1.277 0 0 0 1.573-1.497l-.476-2.266Z" />
  </Svg>
);
export default CommentSolid;
