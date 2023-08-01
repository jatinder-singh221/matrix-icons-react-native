import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SkewerOutline = (props) => (
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
      d="M12 18H5a1 1 0 0 1-1-1 5 5 0 0 1 2.576-4.374c.309-.172.543-.462.593-.812l.688-4.811c.055-.39-.131-.77-.428-1.029A4.157 4.157 0 0 1 6 2.834c0-.46.373-.834.833-.834h10.334c.46 0 .833.373.833.833a4.157 4.157 0 0 1-1.429 3.141c-.297.26-.484.638-.428 1.029l.688 4.81c.05.35.285.641.593.813A4.999 4.999 0 0 1 20 17a1 1 0 0 1-1 1h-7Zm0 0v3.5"
    />
  </Svg>
);
export default SkewerOutline;
