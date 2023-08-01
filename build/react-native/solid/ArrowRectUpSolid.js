import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowRectUpSolid = (props) => (
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
      d="M8.667 9.545H4.5c-.663 0-1.299.26-1.768.72A2.432 2.432 0 0 0 2 12v6.546c0 .65.263 1.275.732 1.735.47.46 1.105.719 1.768.719h15c.663 0 1.299-.259 1.768-.719.469-.46.732-1.085.732-1.735V12c0-.651-.263-1.275-.732-1.736a2.524 2.524 0 0 0-1.768-.719h-4.167m0-3.272L12 3m0 0L8.667 6.273M12 3v13.91"
    />
  </Svg>
);
export default ArrowRectUpSolid;
