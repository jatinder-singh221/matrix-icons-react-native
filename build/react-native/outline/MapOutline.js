import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MapOutline = (props) => (
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
      d="m9.503 3.25 4.993 2.499.006.002c.314.155.682.155.996 0l.006-.002 3.868-1.935A1.125 1.125 0 0 1 21 4.82v12.485c0 .426-.24.816-.622 1.006l-4.875 2.437a1.125 1.125 0 0 1-1.006 0l-4.993-2.497a1.125 1.125 0 0 0-1.008 0l-3.868 1.935A1.125 1.125 0 0 1 3 19.18V6.695c0-.427.241-.816.621-1.006l4.875-2.437.041-.02a1.125 1.125 0 0 1 .966.019Z"
    />
  </Svg>
);
export default MapOutline;
