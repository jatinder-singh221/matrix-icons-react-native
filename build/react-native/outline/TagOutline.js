import * as React from "react";
import Svg, { Path } from "react-native-svg";
const TagOutline = (props) => (
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
      d="M21.39 5.25v4.318a2.251 2.251 0 0 1-.66 1.592l-9.58 9.58c-.7.699-1.78.872-2.608.33a18.095 18.095 0 0 1-5.223-5.223c-.542-.827-.369-1.908.33-2.607l9.581-9.581A2.248 2.248 0 0 1 14.821 3h4.318a2.25 2.25 0 0 1 2.25 2.25ZM18.5 7.134a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default TagOutline;
