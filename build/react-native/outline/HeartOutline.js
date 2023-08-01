import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HeartOutline = (props) => (
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
      d="m11.63 4.838.466.387.476-.373c1.876-1.472 4.519-1.311 6.235.546 1.989 2.151 1.91 5.684-.164 7.728l-6.9 6.8-6.51-6.948c-1.968-2.101-1.98-5.558-.023-7.674 1.773-1.918 4.518-2.046 6.42-.466Z"
    />
  </Svg>
);
export default HeartOutline;
