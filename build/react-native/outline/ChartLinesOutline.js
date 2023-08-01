import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ChartLinesOutline = (props) => (
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
      d="M2 12.75h2a.25.25 0 0 1 .25.25v8a.25.25 0 0 1-.25.25H2a.25.25 0 0 1-.25-.25v-8a.25.25 0 0 1 .25-.25Zm9-5h2a.25.25 0 0 1 .25.25v13a.25.25 0 0 1-.25.25h-2a.25.25 0 0 1-.25-.25V8a.25.25 0 0 1 .25-.25Zm9-5h2a.25.25 0 0 1 .25.25v18a.25.25 0 0 1-.25.25h-2a.25.25 0 0 1-.25-.25V3a.25.25 0 0 1 .25-.25Z"
    />
  </Svg>
);
export default ChartLinesOutline;
