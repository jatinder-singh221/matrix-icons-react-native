import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowRectRightSolid = (props) => (
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
      strokeWidth={3}
      d="M14.454 8.667V4.5c0-.663-.258-1.299-.718-1.768A2.432 2.432 0 0 0 12 2H5.455c-.651 0-1.276.263-1.736.732A2.524 2.524 0 0 0 3 4.5v15c0 .663.259 1.299.719 1.768.46.469 1.085.732 1.736.732H12c.651 0 1.275-.263 1.736-.732.46-.47.718-1.105.718-1.768v-4.167m3.273 0L21 12m0 0-3.273-3.333M21 12H7.09"
    />
  </Svg>
);
export default ArrowRectRightSolid;
