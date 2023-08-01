import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CommentOutline = (props) => (
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
      strokeWidth={1.5}
      d="M21.25 12a9.21 9.21 0 0 1-.884 3.951 2.12 2.12 0 0 0-.168 1.342l.476 2.266a.527.527 0 0 1-.649.618l-1.71-.449a2.122 2.122 0 0 0-1.616.241A9.204 9.204 0 0 1 12 21.25 9.25 9.25 0 1 1 21.25 12Z"
    />
  </Svg>
);
export default CommentOutline;
