import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CompasSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m8.946 15.054 1.527-4.581 4.581-1.527-1.527 4.581-4.581 1.527Z" />
    <Path
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-5.049-4.003a.75.75 0 0 0-.948-.949l-6.36 2.12a.75.75 0 0 0-.475.475l-2.12 6.36a.75.75 0 0 0 .95.948l6.36-2.12a.75.75 0 0 0 .473-.474l2.12-6.36Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default CompasSolid;
