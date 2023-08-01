import * as React from "react";
import Svg, { Path } from "react-native-svg";
const FlagOutline = (props) => (
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
      d="M3 2v20M3 3.01v12.5s2.202-.904 4-1c3.216-.172 4.782 2.115 8 2 1.79-.064 4.224-.858 5.363-1.264a.966.966 0 0 0 .637-.917V4.33c0-.663-.634-1.147-1.28-.997-1.27.297-3.238.69-4.72.677-3.22-.028-4.784-2.172-8-2-1.798.096-4 1-4 1Z"
    />
  </Svg>
);
export default FlagOutline;
