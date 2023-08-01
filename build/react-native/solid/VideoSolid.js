import * as React from "react";
import Svg, { Path } from "react-native-svg";
const VideoSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M21 7.389a.2.2 0 0 0-.316-.163L14 12l6.684 4.774a.2.2 0 0 0 .316-.163V7.39Z" />
    <Path d="M15 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
  </Svg>
);
export default VideoSolid;
