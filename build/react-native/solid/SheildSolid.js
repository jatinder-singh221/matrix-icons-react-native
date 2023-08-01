import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SheildSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M2.67 6.037c-.408.19-.67.604-.67 1.06V10.2C2 16.103 6.25 21.12 12 22c5.75-.881 10-5.897 10-11.8V7.096c0-.455-.262-.87-.67-1.06l-8.08-3.759a2.96 2.96 0 0 0-2.5 0l-8.08 3.76Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SheildSolid;
