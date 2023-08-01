import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HeadphoneSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M2 12.196C2 6.565 6.565 2 12.196 2c5.63 0 10.195 4.565 10.195 10.196v4.77a1.5 1.5 0 0 1-3 0v-4.77a7.196 7.196 0 1 0-14.391 0v4.77a1.5 1.5 0 0 1-3 0v-4.77Z" />
    <Path d="M5.24 18.283a3 3 0 0 1 3-3h.347a1 1 0 0 1 1 1v4.734a1 1 0 0 1-1 1h-.348a3 3 0 0 1-3-3v-.734Zm10.912-3a3 3 0 0 1 3 3v.734a3 3 0 0 1-3 3h-.348a1 1 0 0 1-1-1v-4.734a1 1 0 0 1 1-1h.348Z" />
  </Svg>
);
export default HeadphoneSolid;
