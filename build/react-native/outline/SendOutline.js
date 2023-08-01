import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SendOutline = (props) => (
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
      strokeWidth={1.5}
      d="M4.556 3.107c-.862-.43-1.837.517-1.48 1.412.712 1.785 1.509 4.153 1.72 6.235H9.85a.5.5 0 0 1 0 1h-5c0 2.288-.945 5.157-1.774 7.234-.357.895.618 1.843 1.48 1.413l15.505-7.753a1 1 0 0 0 0-1.788L4.556 3.107Z"
    />
  </Svg>
);
export default SendOutline;
