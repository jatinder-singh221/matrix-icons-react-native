import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BellOffOutline = (props) => (
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
      d="M18.71 14.475c-.214-1.028-.322-2.21-.362-3.406-.115-3.382-2.456-6.414-5.722-7.15.232-.303.37-.68.37-1.086C12.996 1.821 12.143 1 11.09 1s-1.905.82-1.905 1.833c0 .407.138.783.37 1.087a6.917 6.917 0 0 0-1.61.58m11.268 15.75H12.74c.162.27.255.583.255.917 0 1.012-.853 1.833-1.905 1.833s-1.905-.82-1.905-1.833c0-.334.093-.647.255-.917H2.968c-.672 0-1.138-.653-.91-1.261.46-1.22 1.117-3.088 1.414-4.514.214-1.028.322-2.21.362-3.406a7.797 7.797 0 0 1 1.023-3.596m-1.89-4.64L22 20.25"
    />
  </Svg>
);
export default BellOffOutline;
