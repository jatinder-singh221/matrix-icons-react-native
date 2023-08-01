import * as React from "react";
import Svg, { Path } from "react-native-svg";
const UserSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M17.5 6.583c0 2.532-2.462 4.584-5.5 4.584S6.5 9.115 6.5 6.583C6.5 4.052 8.962 2 12 2s5.5 2.052 5.5 4.583ZM2 17.417c0-2.532 2.462-4.584 5.5-4.584h9c3.038 0 5.5 2.052 5.5 4.584C22 19.948 19.538 22 16.5 22h-9C4.462 22 2 19.948 2 17.417Z" />
  </Svg>
);
export default UserSolid;
