import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PhoneAddOutline = (props) => (
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
      d="M11 9h3m0 0h3m-3 0V6m0 3v3M1 4a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19a3 3 0 0 1-3 3h-2.25C8.052 22 1 14.948 1 6.25V4Z"
    />
  </Svg>
);
export default PhoneAddOutline;
