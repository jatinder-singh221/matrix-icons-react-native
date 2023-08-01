import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BarCodeSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M2 1a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1Zm6 0a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1Zm5 1a1 1 0 1 0-2 0v20a1 1 0 1 0 2 0V2Zm8-1a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM5.75 2a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0V2ZM15 1.25a.75.75 0 0 1 .75.75v16.5a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm3.75.75a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0V2Z" />
  </Svg>
);
export default BarCodeSolid;
