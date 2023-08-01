import * as React from "react";
import Svg, { Path } from "react-native-svg";
const InboxSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M2.376 11.25 5.45 5.11A2 2 0 0 1 7.24 4h9.52a2 2 0 0 1 1.79 1.11l3.075 6.14H16a.75.75 0 0 0-.624.334l-1.777 2.666H10.4l-1.777-2.666A.75.75 0 0 0 8 11.25H2.376Z" />
    <Path d="M2 12.75V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.25h-5.599l-1.777 2.666a.75.75 0 0 1-.624.334h-4a.75.75 0 0 1-.624-.334L7.599 12.75H2Z" />
  </Svg>
);
export default InboxSolid;
