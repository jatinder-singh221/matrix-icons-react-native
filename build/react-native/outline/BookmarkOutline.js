import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BookmarkOutline = (props) => (
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
      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21l-8-5-7 5V5.507c0-1.108.806-2.057 1.907-2.185a48.506 48.506 0 0 1 11.186 0Z"
    />
  </Svg>
);
export default BookmarkOutline;
