import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BackwardOutline = (props) => (
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
      d="m12.372 13.82-1.122-.641v3.631c0 .863-.933 1.405-1.683.978l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.062a1.125 1.125 0 0 1 1.683.978v3.633l1.122-.642 6.945-3.97A1.125 1.125 0 0 1 21 8.688v8.123c0 .864-.933 1.405-1.683.977l-6.945-3.968Z"
    />
  </Svg>
);
export default BackwardOutline;
