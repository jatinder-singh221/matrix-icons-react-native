import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SignalOffSolid = (props) => (
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
      strokeWidth={2}
      d="M8.316 16.345A5.231 5.231 0 0 1 12 14.831m-6.842-1.619a9.65 9.65 0 0 1 3.158-2.092m10.526 2.092a9.65 9.65 0 0 0-3.79-2.324M2 10.078a14.125 14.125 0 0 1 3.676-2.632M22 10.08c-3.033-3.01-7.101-4.366-11.068-4.07M5.676 4l13.166 15.478m-6.316 0L12 20l-.526-.522a.748.748 0 0 1 1.052 0Z"
    />
  </Svg>
);
export default SignalOffSolid;
