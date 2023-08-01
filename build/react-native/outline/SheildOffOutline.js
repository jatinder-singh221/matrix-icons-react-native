import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SheildOffOutline = (props) => (
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
      d="m9.196 3 1.554-.723a2.96 2.96 0 0 1 2.5 0l8.08 3.76c.408.19.67.604.67 1.06V10.2c0 1.963-.47 3.828-1.309 5.475M4.5 5.185l-1.83.852c-.408.19-.67.604-.67 1.06V10.2C2 16.103 6.25 21.12 12 22a11.648 11.648 0 0 0 6.186-3M5 3l16.672 17.264"
    />
  </Svg>
);
export default SheildOffOutline;
