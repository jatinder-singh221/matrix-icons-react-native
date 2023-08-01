import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BarCodeOutline = (props) => (
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
      d="M2 1.5a.5.5 0 0 1 .5.5v20a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5Zm6 0a.5.5 0 0 1 .5.5v20a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5Zm4 0a.5.5 0 0 1 .5.5v20a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5Zm9 0a.5.5 0 0 1 .5.5v20a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5ZM5 1.75a.25.25 0 0 1 .25.25v16.5a.25.25 0 1 1-.5 0V2A.25.25 0 0 1 5 1.75Zm10 0a.25.25 0 0 1 .25.25v16.5a.25.25 0 1 1-.5 0V2a.25.25 0 0 1 .25-.25Zm3 0a.25.25 0 0 1 .25.25v20a.25.25 0 1 1-.5 0V2a.25.25 0 0 1 .25-.25Z"
    />
  </Svg>
);
export default BarCodeOutline;
