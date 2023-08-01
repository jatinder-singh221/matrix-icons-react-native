import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HeartOffOutline = (props) => (
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
      strokeWidth={1.5}
      d="M19.17 13.66c2.364-2.33 2.45-6.324.188-8.771-1.982-2.144-5.066-2.34-7.249-.628A5.356 5.356 0 0 0 8 3.041M4.099 5.5c-1.641 2.41-1.443 5.824.587 7.99L11.721 21l4.06-4M4 2l16.264 16.264"
    />
  </Svg>
);
export default HeartOffOutline;
