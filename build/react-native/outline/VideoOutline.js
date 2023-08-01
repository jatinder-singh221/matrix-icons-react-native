import * as React from "react";
import Svg, { Path } from "react-native-svg";
const VideoOutline = (props) => (
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
      d="M17 9.857V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-2.857m0-4.286 3.684-2.631a.2.2 0 0 1 .316.163v9.222a.2.2 0 0 1-.316.163L17 14.143m0-4.286v4.286"
    />
  </Svg>
);
export default VideoOutline;
