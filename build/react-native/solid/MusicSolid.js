import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MusicSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M22 3.017c0-.32-.153-.62-.413-.813a1.049 1.049 0 0 0-.91-.164L7.575 5.77a1.02 1.02 0 0 0-.746.977v8.756a3.488 3.488 0 0 0-1.38-.282C3.544 15.22 2 16.738 2 18.61S3.544 22 5.448 22c1.905 0 3.449-1.518 3.449-3.39V7.51L19.93 4.37v7.743a3.488 3.488 0 0 0-1.38-.282c-1.904 0-3.448 1.517-3.448 3.39 0 1.872 1.544 3.39 3.449 3.39 1.904 0 3.448-1.518 3.448-3.39V3.016Z" />
  </Svg>
);
export default MusicSolid;
