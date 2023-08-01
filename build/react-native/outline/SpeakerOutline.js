import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SpeakerOutline = (props) => (
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
      d="M4 2a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2Zm9 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-4 8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H9Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SpeakerOutline;
