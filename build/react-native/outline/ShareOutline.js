import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ShareOutline = (props) => (
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
      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0-12.814a2.249 2.249 0 0 0 4.219-1.344 2.252 2.252 0 0 0-3.324-1.678 2.25 2.25 0 0 0-.895 3.022Zm0 12.814a2.251 2.251 0 1 0 3.936 2.187 2.251 2.251 0 0 0-3.936-2.187Z"
    />
  </Svg>
);
export default ShareOutline;
