import * as React from "react";
import Svg, { Path } from "react-native-svg";
const InstagramSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M12.52 8.742a3.25 3.25 0 1 0-.954 6.429 3.25 3.25 0 0 0 .954-6.43Z" />
    <Path
      fillRule="evenodd"
      d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5ZM9.856 7.74a4.75 4.75 0 1 1 4.375 8.433 4.75 4.75 0 0 1-4.375-8.432ZM17.5 5.75a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5h-.01Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default InstagramSolid;
