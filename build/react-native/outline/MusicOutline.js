import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MusicOutline = (props) => (
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
      d="M22 13V3.017c0-.32-.153-.62-.413-.813a1.049 1.049 0 0 0-.91-.164l-6.55 1.865L9 5.5l-.103 2.01v8.99M22 13v2.22c0 1.873-1.544 3.39-3.448 3.39-1.905 0-3.449-1.517-3.449-3.39 0-1.872 1.544-3.39 3.449-3.39.49 0 .957.101 1.379.283 0 0 0 0 0 0l1.034.443L22 13ZM8.897 16.5v2.11c0 1.872-1.544 3.39-3.449 3.39C3.544 22 2 20.482 2 18.61s1.544-3.39 3.448-3.39c.49 0 .957.101 1.38.282l2.069.998Z"
    />
  </Svg>
);
export default MusicOutline;
