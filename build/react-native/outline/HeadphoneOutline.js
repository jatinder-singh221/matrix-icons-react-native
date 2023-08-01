import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HeadphoneOutline = (props) => (
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
      d="M22 16.546V11.09C22 6.07 17.523 2 12 2S2 6.07 2 11.09v5.456M7 22h1c.552 0 1-.407 1-.91v-5.454c0-.502-.448-.909-1-.909H7c-1.657 0-3 1.221-3 2.727v1.819C4 20.779 5.343 22 7 22Zm10 0h-1c-.552 0-1-.407-1-.91v-5.454c0-.502.448-.909 1-.909h1c1.657 0 3 1.221 3 2.727v1.819C20 20.779 18.657 22 17 22Z"
    />
  </Svg>
);
export default HeadphoneOutline;
