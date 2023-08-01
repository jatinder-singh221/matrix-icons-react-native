import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PhoneAddSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M1.879 1.879A3 3 0 0 0 1 4v2.25C1 14.948 8.052 22 16.75 22H19a3 3 0 0 0 3-3v-1.371c0-.861-.586-1.611-1.42-1.82l-4.423-1.105a1.875 1.875 0 0 0-1.955.694l-.97 1.293c-.102.135-.249.164-.352.126a11.285 11.285 0 0 1-6.697-6.697c-.038-.103-.009-.251.126-.352l1.293-.97a1.875 1.875 0 0 0 .694-1.955L7.191 2.42A1.876 1.876 0 0 0 5.372 1H4a3 3 0 0 0-2.121.879Z" />
    <Path d="M15.75 5a.75.75 0 0 0-1.5 0v2.25H12a.75.75 0 0 0 0 1.5h2.25V11a.75.75 0 0 0 1.5 0V8.75H18a.75.75 0 0 0 0-1.5h-2.25V5Z" />
  </Svg>
);
export default PhoneAddSolid;
