import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HeartSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M4.66 4.795c-2.224 2.405-2.211 6.307.026 8.696L11.721 21l7.448-7.34c2.365-2.33 2.45-6.324.19-8.771-1.983-2.144-5.067-2.34-7.25-.628-2.208-1.834-5.405-1.678-7.45.534Z" />
  </Svg>
);
export default HeartSolid;
