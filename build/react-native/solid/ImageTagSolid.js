import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ImageTagSolid = (props) => (
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
      d="M7 2a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5H7Zm3.762 7.5c0 .828-.64 1.5-1.428 1.5-.79 0-1.43-.672-1.43-1.5S8.545 8 9.335 8c.788 0 1.428.672 1.428 1.5Zm4.686.094a1 1 0 0 0-1.753 0l-1.738 3.16a2.492 2.492 0 0 0-1.79-.754H8.5a2.5 2.5 0 1 0 0 5h1.667a2.5 2.5 0 0 0 2.292-1.5h4.546a1 1 0 0 0 .876-1.482l-2.433-4.424Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ImageTagSolid;
